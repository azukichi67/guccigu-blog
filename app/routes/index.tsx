import { createRoute } from "honox/factory";
import ArticleCardList from "@/components/ArticleCardList";
import Title from "@/components/Title";
import { getPosts } from "@/libs/posts";

export default createRoute((c) => {
  const posts = getPosts();

  const name = "guccigu blog";
  return c.render(
    <>
      <Title>Latest Articles</Title>
      <ArticleCardList articles={posts} />
    </>,
    { title: name, description: "技術や日々についてをぼちぼち書いてくブログ" }
  );
});
