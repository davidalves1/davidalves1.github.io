import { describe, it, expect } from "vitest";
import { getAllPosts, getPostBySlug } from "./posts";

describe("posts index", () => {
  it("loads posts from markdown with rendered html", () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    for (const post of posts) {
      expect(post.slug).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.html).toContain("<");
      expect(post.displayDate).toMatch(/\d{4}/);
    }
  });

  it("sorts posts newest first", () => {
    const dates = getAllPosts().map((p) => new Date(p.date).getTime());
    const sorted = [...dates].sort((a, b) => b - a);
    expect(dates).toEqual(sorted);
  });

  it("excludes drafts", () => {
    expect(getAllPosts().every((p) => p.slug !== "zzz-draft-test")).toBe(true);
  });

  it("looks up a post by slug", () => {
    const first = getAllPosts()[0];
    expect(getPostBySlug(first.slug)).toEqual(first);
    expect(getPostBySlug("does-not-exist")).toBeUndefined();
  });
});
