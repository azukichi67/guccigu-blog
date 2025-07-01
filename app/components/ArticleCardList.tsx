import * as R from "remeda";
import ArticleCard from "@/components/ArticleCard";
import { Post } from "@/libs/posts";

type Props = {
  articles: Post[];
};

export default function ArticleCardList({ articles }: Props) {
  return (
    <div class="flex justify-center">
      <ul>
        {R.sortBy(articles, [R.prop("date"), "desc"]).map((x, i) => {
          return (
            <li class="p-2" key={i}>
              <a href={`/posts/${x.slug}`}>
                <ArticleCard article={x} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
