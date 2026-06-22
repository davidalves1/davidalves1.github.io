export type Post = {
  slug: string;
  title: string;
  /** Raw ISO date from frontmatter, used for sorting. */
  date: string;
  /** Human-friendly date for display, e.g. "Jun 2025". */
  displayDate: string;
  excerpt: string;
  /** Pre-rendered, syntax-highlighted post body. */
  html: string;
};

type MarkdownModule = {
  slug: string;
  frontmatter: { title: string; date: string; excerpt: string; draft: boolean };
  html: string;
};

const displayFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

function formatDisplayDate(date: string): string {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? date : displayFormatter.format(parsed);
}

// Bundled at build time by the markdown Vite plugin — no fs/markdown at runtime.
const modules = import.meta.glob<MarkdownModule>("../content/blog/*.md", {
  eager: true,
});

const allPosts: Post[] = Object.values(modules)
  .filter((mod) => !mod.frontmatter.draft)
  .map((mod) => ({
    slug: mod.slug,
    title: mod.frontmatter.title,
    date: mod.frontmatter.date,
    displayDate: formatDisplayDate(mod.frontmatter.date),
    excerpt: mod.frontmatter.excerpt,
    html: mod.html,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getAllPosts(): Post[] {
  return allPosts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug);
}
