import { PropsWithChildren } from "hono/jsx";
import { cn } from "@/utils/tailwind.util";

export default function Title({ children }: PropsWithChildren) {
  return (
    <h2
      class={cn(
        "py-7",
        "text-center text-2xl tracking-wider font-alfa-slab-one text-white",
        "bg-gradient-to-r from-black to-fuchsia-700",
        "bg-gradient-to-r dark:from-green-600",
        "[-webkit-text-stroke:0.5px_black]",
        "[clip-path:polygon(0_0%,100%_20%,100%_80%,0_100%)]"
      )}
    >
      {children}
    </h2>
  );
}
