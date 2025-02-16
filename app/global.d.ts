/* eslint-disable @typescript-eslint/no-empty-object-type */
import {} from "hono";

type Head = {
  title?: string;
};

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
  interface ContextRenderer {
    (content: string | Promise<string>, head?: Head):
      | Response
      | Promise<Response>;
  }
}
