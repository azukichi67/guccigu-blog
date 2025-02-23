import { createRoute } from "honox/factory";

export default createRoute((c) => {
  return c.render(
    <div class="flex h-full justify-center items-center">
      <div class="text-3xl">準備中</div>
    </div>,
    {
      title: "about",
    }
  );
});
