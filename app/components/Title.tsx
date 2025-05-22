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
        "[clip-path:polygon(0_0%,25%_30%,50%_20%,75%_30%,100%_0,100%_50%,75%_80%,50%_70%,25%_80%,0_50%)]"
      )}
    >
      {children}
    </h2>
  );
}
