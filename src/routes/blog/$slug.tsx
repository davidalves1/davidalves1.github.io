import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlug } from "#/lib/posts";
import { SITE_URL } from "#/lib/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const url = `${SITE_URL}/blog/${loaderData.slug}`;
    return {
      meta: [
        { title: `${loaderData.title} — David Alves` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: BlogPost,
  notFoundComponent: PostNotFound,
});

function BlogPost() {
  const post = Route.useLoaderData();

  return (
    <main className="pt-14">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <Link
          to="/blog"
          className="font-sans text-sm text-muted hover:text-fg transition-colors duration-150 no-underline mb-16 inline-block"
        >
          ← Blog
        </Link>

        <article className="max-w-[65ch]">
          <header className="mb-12">
            <p className="font-sans text-xs font-medium tracking-[0.12em] uppercase text-muted mb-4">
              {post.displayDate}
            </p>
            <h1
              className="font-serif font-bold text-fg leading-[1.05]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              {post.title}
            </h1>
            <hr className="border-0 border-t border-border mt-8" />
          </header>

          <div
            className="prose prose-invert max-w-none font-sans text-fg prose-headings:font-serif prose-headings:text-fg prose-a:text-accent prose-strong:text-fg prose-pre:bg-transparent prose-pre:p-0 prose-pre:rounded-none prose-code:text-fg prose-blockquote:border-border prose-blockquote:text-muted"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </div>
    </main>
  );
}

function PostNotFound() {
  return (
    <main className="pt-14">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <Link
          to="/blog"
          className="font-sans text-sm text-muted hover:text-fg transition-colors duration-150 no-underline mb-16 inline-block"
        >
          ← Blog
        </Link>
        <p className="font-sans text-base text-muted">Post not found.</p>
      </div>
    </main>
  );
}
