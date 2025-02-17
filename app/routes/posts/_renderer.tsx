import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const _title = `${frontmatter?.title} | Guccigu's Blog`;

  return (
    <Layout description={frontmatter?.description} title={_title}>
      <div class="flex justify-center">
        <div class="prose prose-lg w-2xl">{children}</div>
      </div>
    </Layout>
  );
});
