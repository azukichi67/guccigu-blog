import { PropsWithChildren } from "hono/jsx";
import { cn } from "@/utils/tailwind.util";

export default function Title({ children }: PropsWithChildren) {
  return (
    <h2
      class={cn(
        "py-8",
        "flex justify-center items-center h-7 rounded-3xl",
        "text-2xl tracking-wider font-alfa-slab-one",
        "bg-slate-300 dark:bg-slate-600"
      )}
    >
      {children}
    </h2>
  );
}
