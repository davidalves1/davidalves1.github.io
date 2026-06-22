import { Link } from "@tanstack/react-router";
import { getAllPosts } from "#/lib/posts";

export function Writing() {
  const preview = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-24 px-6 max-w-5xl mx-auto">
      <h2
        className="font-serif font-bold text-fg mb-8 leading-tight"
        style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
      >
        Blog
      </h2>
      <div className="border-t border-border">
        {preview.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="flex justify-between items-baseline py-4 border-b border-border group no-underline"
          >
            <span className="font-sans text-base text-fg group-hover:text-accent transition-colors duration-150">
              {post.title}
            </span>
            <span className="font-sans text-xs text-muted tracking-wide ml-8 shrink-0">
              {post.displayDate}
            </span>
          </Link>
        ))}
      </div>
      <Link
        to="/blog"
        className="inline-block mt-6 font-sans text-sm text-muted hover:text-accent transition-colors duration-150 no-underline"
      >
        All posts →
      </Link>
    </section>
  );
}
