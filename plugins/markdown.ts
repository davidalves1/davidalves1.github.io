import path from "node:path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import type { Plugin } from "vite";

/**
 * Build-time markdown pipeline.
 *
 * Transforms `src/content/**\/*.md` imports into ESM modules exporting
 * `{ slug, frontmatter, html }`. Frontmatter is parsed with gray-matter and the
 * body is rendered to HTML with markdown-it, with fenced code highlighted by
 * Shiki — all at build time, so neither markdown-it nor Shiki ship to the edge.
 */

// Shiki highlighter setup is expensive; build the markdown-it instance once.
let mdPromise: Promise<MarkdownIt> | null = null;

function getMarkdown(): Promise<MarkdownIt> {
  if (!mdPromise) {
    mdPromise = (async () => {
      const md = MarkdownIt({ html: true, linkify: true, typographer: true });
      md.use(
        await Shiki({
          theme: "github-dark",
        }),
      );
      return md;
    })();
  }
  return mdPromise;
}

export function markdown(): Plugin {
  return {
    name: "blog-markdown",
    enforce: "pre",
    async transform(code, id) {
      if (!id.endsWith(".md")) return null;

      const { data, content } = matter(code);
      const md = await getMarkdown();
      const html = md.render(content);
      const slug = path.basename(id, ".md");

      const frontmatter = {
        title: data.title ?? slug,
        // Normalize YAML dates (gray-matter may yield a Date) to a string.
        date: data.date ? String(data.date) : "",
        excerpt: data.excerpt ?? "",
        draft: data.draft === true,
      };

      const moduleCode = `
export const slug = ${JSON.stringify(slug)};
export const frontmatter = ${JSON.stringify(frontmatter)};
export const html = ${JSON.stringify(html)};
export default { slug, frontmatter, html };
`;
      return { code: moduleCode, map: null };
    },
  };
}
