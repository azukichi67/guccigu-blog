import { createRoute } from "honox/factory";
import * as R from "remeda";
import { Article } from "@/components/ArticleCard";
import ArticleCardList from "@/components/ArticleCardList";

export default createRoute((c) => {
  const entries = import.meta.glob<{ frontmatter: Article }>(
    "./posts/**/*.mdx",
    {
      eager: true,
    }
  );
  const articles = R.pipe(
    Object.entries(entries),
    R.filter(([_, module]) => module.frontmatter.published),
    R.map(([path, module]) => {
      return {
        ...module.frontmatter,
        path,
      };
    })
  );

  const name = "guccigu blog";
  return c.render(
    <div>
      <ArticleCardList articles={articles} />
    </div>,
    { title: name, description: "技術や日々についてをぼちぼち書いてくブログ" }
  );
});
