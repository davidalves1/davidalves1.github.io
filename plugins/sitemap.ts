import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Plugin } from "vite";

/**
 * Build-time sitemap generation.
 *
 * Reads `src/content/blog/*.md` directly from disk (fs is available during the
 * build, but not on the Cloudflare edge), and produces `/sitemap.xml` listing
 * the home page, the blog index, and every non-draft post. Emitted as a static
 * asset in the build and served via middleware in dev.
 */

const CONTENT_DIR = path.resolve(process.cwd(), "src/content/blog");

function buildSitemap(siteUrl: string): string {
  const origin = siteUrl.replace(/\/$/, "");
  const files = fs.existsSync(CONTENT_DIR)
    ? fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"))
    : [];

  const posts = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
      const { data } = matter(raw);
      return {
        slug: path.basename(file, ".md"),
        date: data.date ? String(data.date) : "",
        draft: data.draft === true,
      };
    })
    .filter((p) => !p.draft);

  const urls = [
    { loc: `${origin}/`, lastmod: "" },
    { loc: `${origin}/blog`, lastmod: "" },
    ...posts.map((p) => ({
      loc: `${origin}/blog/${p.slug}`,
      lastmod: p.date ? new Date(p.date).toISOString().slice(0, 10) : "",
    })),
  ];

  const body = urls
    .map(({ loc, lastmod }) => {
      const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : "";
      return `  <url>\n    <loc>${loc}</loc>${lastmodTag}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function sitemap(siteUrl: string): Plugin {
  return {
    name: "blog-sitemap",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.split("?")[0] === "/sitemap.xml") {
          res.setHeader("Content-Type", "application/xml");
          res.end(buildSitemap(siteUrl));
          return;
        }
        next();
      });
    },
    generateBundle() {
      // Only emit from the client (browser/static) build to avoid duplicates.
      const envName = this.environment?.name;
      if (envName && envName !== "client") return;
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: buildSitemap(siteUrl),
      });
    },
  };
}
