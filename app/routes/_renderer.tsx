import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Script } from "honox/server";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Layout from "@/layouts/Layout";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" />
        <Script async src="/app/client.ts" />
        <Style />
      </head>
      <body>
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
});
