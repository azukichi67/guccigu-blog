import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | guccigu blog`;

  return (
    <Layout description={frontmatter?.description} title={_title}>
      <div class="flex flex-col items-center w-screen">
        <div class="flex flex-col items-center md:w-full p-7 md:p-10 border-b-2 border-gray-400">
          <div class="text-xl text-center md:text-2xl font-bold">
            {frontmatter?.date}
          </div>
          <div class="text-3xl text-center md:text-4xl font-bold">
            {frontmatter?.title}
          </div>
        </div>
        <div class="flex justify-start pt-2 md:w-4xl md:p-10">
          <div class="prose prose-base max-w-screen p-4">{children}</div>
        </div>
      </div>
    </Layout>
  );
});
