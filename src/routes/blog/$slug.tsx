import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPostBySlug } from "#/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
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
              {post.date}
            </p>
            <h1
              className="font-serif font-bold text-fg leading-[1.05]"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              {post.title}
            </h1>
            <hr className="border-0 border-t border-border mt-8" />
          </header>

          <div className="font-sans text-base text-fg leading-[1.75] space-y-6 whitespace-pre-line">
            {post.content}
          </div>
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
