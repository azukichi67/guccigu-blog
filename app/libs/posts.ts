import * as R from "remeda";
import type { JSX } from "hono/jsx/jsx-runtime";

export type Formatter = {
  title: string;
  description: string;
  date: string;
  tags: string;
  published: boolean;
};

export type Post = Formatter & {
  path: string;
  slug: string;
  getElement: () => JSX.Element;
};

const _posts = import.meta.glob<{
  frontmatter: Formatter;
  default: () => JSX.Element;
}>("../posts/**/*.mdx", {
  eager: true,
});

const slugFrom = (path: string) => {
  const match = path.match(/(?<=[0-9]\/).+(?=\.mdx)/);
  if (!match) {
    throw new Error(`Invalid path format: "${path}"`);
  }
  return match[0];
};

export const posts: Post[] = R.pipe(
  Object.entries(_posts),
  R.filter(([_, module]) => module.frontmatter.published),
  R.map(([path, module]) => {
    return {
      ...module.frontmatter,
      path,
      slug: slugFrom(path),
      getElement: module.default,
    };
  }),
  (x) => R.sortBy(x, [R.prop("date"), "desc"])
);

export const getPosts = () => posts;
export const getPost = (slug: string) => {
  const post = posts.find((x) => x.slug === slug);
  if (!post) {
    throw new Error(`Post with slug "${slug}" not found`);
  }
  return post;
};
