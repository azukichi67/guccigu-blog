export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {

  plop.setHelper("today", () => {
    return new Date().toISOString().split("T")[0].replaceAll("-", "/");
  });

  plop.setHelper("directory", () => {
    const today = new Date
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    return `${year}${month}`
  });

  plop.setGenerator("article", {
    description: "create a article file", 
    prompts: [
      {
        type: "input",
        name: "title",
        message: "記事のタイトルを入力してください",
      },
      {
        type: "input",
        name: "slug",
        message: "記事の Slug を入力してください",
      },
    ],
    actions: [
      {
        type: "add",
        path: "./app/routes/posts/{{directory}}/{{slug}}.mdx",
        templateFile: "./plop-templates/article/article.mdx.hbs",
      },
    ],
  });
}