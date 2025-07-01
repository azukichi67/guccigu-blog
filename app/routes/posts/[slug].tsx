import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import { getPost, getPosts } from "@/libs/posts";

export default createRoute(
  ssgParams(() => {
    const posts = getPosts();
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }),
  (c) => {
    const slug = c.req.param("slug");
    const post = getPost(slug);
    const title = `${post.title} | guccigu blog`;

    return c.render(
      <div class="flex flex-col items-center w-full">
        <div class="flex flex-col items-center w-full p-7 md:p-10 border-b-2 border-gray-400">
          <div class="text-xl text-center md:text-2xl font-bold">
            {post?.date}
          </div>
          <div class="text-3xl text-center md:text-4xl font-bold">
            {post?.title}
          </div>
        </div>
        <div class="pt-2 w-full md:p-10">
          <div class="prose prose-base dark:prose-invert">
            {post.getElement()}
          </div>
        </div>
      </div>,
      { title, description: post.description }
    );
  }
);
