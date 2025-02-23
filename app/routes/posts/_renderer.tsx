import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | guccigu blog`;

  return (
    <Layout description={frontmatter?.description} title={_title}>
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center p-5">
          <div class="text-2xl font-bold">{frontmatter?.date}</div>
          <div class="text-4xl font-bold">{frontmatter?.title}</div>
        </div>
        <div class="flex justify-center">
          <div class="prose prose-lg w-2xl">{children}</div>
        </div>
      </div>
    </Layout>
  );
});
