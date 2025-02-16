import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    honox({ devServer: { adapter } }),
    mdx({
      jsxImportSource: "hono/jsx",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    build(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
