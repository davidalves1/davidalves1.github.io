# davidalves1

Personal portfolio for David Alves, software engineer.

## Stack

- [TanStack Start](https://tanstack.com/start) — SSR framework
- [TanStack Router](https://tanstack.com/router) — file-based routing
- [Nitro](https://nitro.build) — server adapter
- [Tailwind CSS v4](https://tailwindcss.com) — styling
- [Vitest](https://vitest.dev) — testing

## Development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy

Nitro compiles to a self-contained server. Set the preset in `vite.config.ts` to match your target host:

```ts
nitro({ preset: "cloudflare-pages" }); // or 'vercel', 'netlify', 'node-server', etc.
```

See [Nitro deploy docs](https://nitro.build/deploy) for all available presets.

## Testing

```bash
pnpm test
```

## Routing

Routes are files under `src/routes/`. TanStack Router generates the route tree automatically — run `pnpm generate-routes` after adding or removing route files.
