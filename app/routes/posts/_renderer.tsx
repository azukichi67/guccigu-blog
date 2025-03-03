import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | guccigu blog`;

  return (
    <Layout description={frontmatter?.description} title={_title}>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center w-full p-10 border-b-2 border-gray-400">
          <div class="text-2xl font-bold">{frontmatter?.date}</div>
          <div class="text-4xl font-bold">{frontmatter?.title}</div>
        </div>
        <div class="flex justify-center p-10">
          <div class="prose prose-base prose-code:px-2 max-w-none">
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
});
