import build from "@hono/vite-build/cloudflare-pages";
import adapter from "@hono/vite-dev-server/cloudflare";
import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const entry = "./app/server.ts";

// see: https://zenn.dev/ryuapp/scraps/503cb72f57c7bb
export default defineConfig({
  envDir: "./env",
  plugins: [
    honox({
      client: {
        input: ["/app/style.css"],
      },
      devServer: { adapter },
    }),
    mdx({
      jsxImportSource: "hono/jsx",
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    }),
    build(),
    tailwindcss(),
    tsconfigPaths(),
    ssg({ entry }),
  ],
  server: {
    host: "0.0.0.0",
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
