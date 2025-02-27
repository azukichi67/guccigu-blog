type Props = {
  article: Article;
};

export type Article = {
  path: string;
  title: string;
  description: string;
  date: string;
  tags: string;
  published: boolean;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className="flex w-2xl border-b-2 hover:text-gray-500 border-gray-100">
      <div className="p-4 flex flex-col items-start mt-auto">
        <div className="flex gap-1">
          {article.tags.split(",").map((x, i) => {
            return (
              <span
                className="inline-block py-1 px-2 rounded bg-green-50 text-green-500 text-xs font-medium tracking-widest"
                key={i}
              >
                {`#${x}`}
              </span>
            );
          })}
        </div>
        <div className="p-2">{article.date}</div>
        <h2 className="text-2xl font-medium px-2 pb-2">{article.title}</h2>
      </div>
    </div>
  );
}
