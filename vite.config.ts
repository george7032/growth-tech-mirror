// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Outside Lovable (your own `npm run build`), produce a fully static site:
  // every page is pre-rendered to plain HTML in dist/ so it can be uploaded
  // to any static host (cPanel, Netlify, GitHub Pages, etc).
  // Inside Lovable, the platform pins its own Cloudflare target and this is ignored.
  nitro: {
    // Outside Lovable, build a plain Node server + static assets so
    // scripts/build-static.mjs can render every page to static HTML in dist/.
    // Inside Lovable the platform pins its own Cloudflare target and ignores this.
    preset: "node-server",
    output: { dir: "dist", publicDir: "dist", serverDir: "dist-server" },
  } as never,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
