import { css } from "hono/css";
import { createRoute } from "honox/factory";
import { Article } from "@/components/ArticleCard";
import ArticleCardList from "@/components/ArticleCardList";

const className = css`
  font-family: sans-serif;
`;

export default createRoute((c) => {
  const articles = import.meta.glob<{ frontmatter: Article }>("./posts/*.mdx", {
    eager: true,
  });

  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div class={className}>
      <ArticleCardList articles={articles} />
    </div>,
    { title: name }
  );
});
