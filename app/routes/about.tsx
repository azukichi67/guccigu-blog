import { createRoute } from "honox/factory";
import Title from "@/components/Title";

export default createRoute((c) => {
  return c.render(
    <>
      <Title>About</Title>
      <div class="flex h-full justify-center items-center">
        <div class="text-3xl pt-15">準備中</div>
      </div>
    </>,
    {
      title: "About | guccigu blog",
    }
  );
});
