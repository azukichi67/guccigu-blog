import * as R from "remeda";
import ArticleCard, { Article } from "@/components/ArticleCard";

type Props = {
  articles: Article[];
};

export default function ArticleCardList({ articles }: Props) {
  return (
    <div class="flex justify-center">
      <ul>
        {R.sortBy(articles, [R.prop("date"), "desc"]).map((x, i) => {
          return (
            <li class="p-2" key={i}>
              <a href={`${x.path.replace(/\.mdx$/, "")}`}>
                <ArticleCard article={x} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
