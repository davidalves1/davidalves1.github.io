export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

// TODO: Replace placeholder posts with your actual writing.
export const posts: Post[] = [
  {
    slug: 'on-building-fast',
    title: 'On Building Fast',
    date: 'Jun 2025',
    excerpt: 'Shipping quickly is a skill. So is knowing when not to.',
    content: `Replace this with your actual post content.

This is a placeholder for your first article. You can write in plain text here, or wire up an MDX pipeline once you have more posts to manage.

The slug "on-building-fast" corresponds to the URL /blog/on-building-fast.`,
  },
  {
    slug: 'the-cost-of-abstraction',
    title: 'The Cost of Abstraction',
    date: 'Mar 2025',
    excerpt: 'Every layer of indirection has a price. Most of the time, it is worth paying.',
    content: `Replace this with your actual post content.

This is a placeholder for your second article.

The slug "the-cost-of-abstraction" corresponds to the URL /blog/the-cost-of-abstraction.`,
  },
  {
    slug: 'what-makes-an-interface-honest',
    title: 'What Makes an Interface Honest',
    date: 'Jan 2025',
    excerpt: 'Good interfaces do not hide their constraints. They surface them.',
    content: `Replace this with your actual post content.

This is a placeholder for your third article.

The slug "what-makes-an-interface-honest" corresponds to the URL /blog/what-makes-an-interface-honest.`,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
