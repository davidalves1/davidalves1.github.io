---
title: "What Makes an Interface Honest"
date: "2025-01-18"
excerpt: "Good interfaces do not hide their constraints. They surface them."
draft: true
---

Good interfaces do not hide their constraints. They surface them.

This is placeholder content. Replace it with your actual article.

## Honesty in types

A function signature is a promise. When the types say more than the implementation can
deliver — or less — the interface is lying, and every caller pays for it later.

1. Make illegal states unrepresentable.
2. Return errors you can recover from; throw the ones you can't.
3. Name things for what they do, not how they do it.

The slug `what-makes-an-interface-honest` maps to the URL `/blog/what-makes-an-interface-honest`.
