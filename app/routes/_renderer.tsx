import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import Header from "@/layouts/$Header";
import Footer from "@/layouts/Footer";

export default jsxRenderer(({ children, title, description }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <title>{title}</title>
        {description ? <meta content={description} name="description" /> : null}
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
        {import.meta.env.PROD ? (
          <script src="/static/set-theme.js" />
        ) : (
          <script src="/app/set-theme.ts" />
        )}
        <Script src="/app/client.ts" />
        <Link href="/app/style.css" rel="stylesheet" />
      </head>
      <body class="max-w-7xl px-5 md:px-20 mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
});
