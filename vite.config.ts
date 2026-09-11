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
    preset: "node-server",
    // Pre-render all pages to static HTML during the build (applied only
    // outside Lovable, where the platform pins its own Cloudflare target).
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/about",
        "/services",
        "/blog",
        "/contact",
        "/blog/signs-your-business-network-needs-an-upgrade",
        "/blog/cybersecurity-basics-every-small-business-should-have",
        "/blog/is-it-time-to-rebrand",
        "/blog/cloud-vs-on-premise",
        "/blog/what-makes-a-website-convert",
        "/blog/real-cost-of-a-data-breach",
        "/blog/brand-identity-that-lasts",
        "/blog/choosing-the-right-database",
      ],
    },
    // Static-friendly output: public files (HTML + assets) land in dist/
    output: { dir: "dist", publicDir: "dist", serverDir: "dist-server" },
  } as never,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Pre-render every page to plain HTML so `npm run build` emits a static site.
    prerender: { enabled: true, crawlLinks: true },
    pages: [
      { path: "/" },
      { path: "/about" },
      { path: "/services" },
      { path: "/blog" },
      { path: "/contact" },
      { path: "/blog/signs-your-business-network-needs-an-upgrade" },
      { path: "/blog/cybersecurity-basics-every-small-business-should-have" },
      { path: "/blog/is-it-time-to-rebrand" },
      { path: "/blog/cloud-vs-on-premise" },
      { path: "/blog/what-makes-a-website-convert" },
      { path: "/blog/real-cost-of-a-data-breach" },
      { path: "/blog/brand-identity-that-lasts" },
      { path: "/blog/choosing-the-right-database" },
    ],
  },
});
