import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

import { markdown } from "./plugins/markdown";
import { sitemap } from "./plugins/sitemap";
import { SITE_URL } from "./src/lib/site";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    markdown(),
    sitemap(SITE_URL),
    devtools(),
    nitro({
      rollupConfig: { external: [/^@sentry\//] },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});

export default config;
