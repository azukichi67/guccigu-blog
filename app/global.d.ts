/* eslint-disable @typescript-eslint/no-empty-object-type */
import {} from "hono";

type Head = {
  title?: string;
  description?: string;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  interface ContextRenderer {
    (
      content: string | Promise<string>,
      head?: Head & { frontmatter?: Head; description?: string }
    ): Response | Promise<Response>;
  }
}
