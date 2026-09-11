/**
 * Post-build step: turns the app into a fully static site.
 *
 * After `vite build` (node-server preset outside Lovable), this script starts
 * the built server, fetches every page, and writes plain HTML files into
 * dist/ next to the static assets. The resulting dist/ folder can be uploaded
 * to any static host (cPanel, Netlify, GitHub Pages, etc).
 *
 * Inside the Lovable build environment this script does nothing — Lovable
 * deploys the app itself.
 */
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

// Skip inside Lovable: the platform builds and hosts the app itself.
if (process.env.LOVABLE_SANDBOX === "1" || process.env.DEV_SERVER__PROJECT_PATH) {
  console.log("[build-static] Lovable environment detected — skipping static export.");
  process.exit(0);
}

const ROUTES = [
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
];

const PORT = 41739;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const serverEntry = path.resolve("dist-server/index.mjs");
const outDir = path.resolve("dist");

if (!existsSync(serverEntry)) {
  console.error("[build-static] Built server not found at dist-server/index.mjs — run `vite build` first.");
  process.exit(1);
}

const server = spawn(process.execPath, [serverEntry], {
  env: { ...process.env, PORT: String(PORT) },
  stdio: ["ignore", "pipe", "inherit"],
});

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const res = await fetch(ORIGIN + "/");
      if (res.status > 0) return;
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500));
  }
  throw new Error("Built server did not start on port " + PORT);
}

function htmlPathFor(route) {
  if (route === "/") return path.join(outDir, "index.html");
  return path.join(outDir, route.slice(1), "index.html");
}

try {
  await waitForServer();
  for (const route of ROUTES) {
    const res = await fetch(ORIGIN + route);
    if (!res.ok) throw new Error(`Failed to render ${route}: HTTP ${res.status}`);
    const html = await res.text();
    const file = htmlPathFor(route);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, html, "utf8");
    console.log(`[build-static] ${route} -> ${path.relative(process.cwd(), file)}`);
  }
  console.log(`\n[build-static] Done — upload the contents of dist/ to your web host.`);
} finally {
  server.kill("SIGTERM");
}
