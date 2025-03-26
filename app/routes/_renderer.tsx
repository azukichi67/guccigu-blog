import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>{title}</title>
        <link href="/favicon.ico" rel="icon" />
        <Script src="/app/client.ts" />
        <Link href="/app/style.css" rel="stylesheet" />
      </head>
      <body class="flex flex-col items-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
});
