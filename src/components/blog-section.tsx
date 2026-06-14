import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { posts } from '#/data/posts'

const POSTS_PER_PAGE = 5

export function BlogSection() {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE)
  const visible = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

  return (
    <section id="blog" className="py-24 px-6 max-w-5xl mx-auto">
      <h2
        className="font-serif font-bold text-fg mb-8 leading-tight"
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)' }}
      >
        Blog
      </h2>

      <div className="border-t border-border">
        {visible.map((post) => (
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
              {post.date}
            </span>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="font-sans text-sm text-muted hover:text-fg transition-colors duration-150 disabled:opacity-30 disabled:cursor-default cursor-pointer bg-transparent border-0 p-0"
          >
            ← Prev
          </button>
          <span className="font-sans text-xs text-muted tabular-nums">
            {page} / {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="font-sans text-sm text-muted hover:text-fg transition-colors duration-150 disabled:opacity-30 disabled:cursor-default cursor-pointer bg-transparent border-0 p-0"
          >
            Next →
          </button>
        </div>
      )}
    </section>
  )
}
