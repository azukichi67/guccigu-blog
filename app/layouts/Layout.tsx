import { PropsWithChildren } from "hono/jsx";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <div class="flex flex-col items-center h-screen">
        <div class="h-auto w-5xl">{children}</div>
      </div>
    </main>
  );
}
