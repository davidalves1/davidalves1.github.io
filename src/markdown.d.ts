declare module "*.md" {
  export const slug: string;
  export const frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    draft: boolean;
  };
  export const html: string;
  const mod: { slug: string; frontmatter: typeof frontmatter; html: string };
  export default mod;
}
