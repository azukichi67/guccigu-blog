import ArticleCard, { Article } from "@/components/ArticleCard";

type Props = {
  articles: Record<
    string,
    {
      frontmatter: Article;
    }
  >;
};

export default function ArticleCardList({ articles }: Props) {
  const entries = Object.entries(articles).filter(
    ([_, module]) => module.frontmatter.published
  );

  return (
    <div class="flex justify-center">
      <ul class="article-list">
        {entries.map(([id, module], i) => {
          return (
            <li class="p-2" key={i}>
              <a href={`${id.replace(/\.mdx$/, "")}`}>
                <ArticleCard article={module.frontmatter} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
