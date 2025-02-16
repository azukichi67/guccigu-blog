import { css } from "hono/css";
import { createRoute } from "honox/factory";
import Counter from "@/islands/counter";

const className = css`
  font-family: sans-serif;
`;

export type Meta = {
  title: string;
};

export default createRoute((c) => {
  const posts = import.meta.glob<{ frontmatter: Meta }>("./posts/*.mdx", {
    eager: true,
  });
  const name = c.req.query("name") ?? "Hono";
  return c.render(
    <div class={className}>
      <h1 class="text-red-500">Hello, {name}!</h1>
      <Counter />
      <h2>Posts</h2>
      <ul class="article-list">
        {Object.entries(posts).map(([id, module], i) => {
          if (module.frontmatter) {
            return (
              <li key={i}>
                <a href={`${id.replace(/\.mdx$/, "")}`}>
                  {module.frontmatter.title}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </div>,
    { title: name }
  );
});
