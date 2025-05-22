import { useState } from "hono/jsx";
import { HamburgerMenu } from "@/layouts/$HamburgerMenu";
import ThemeButton from "@/layouts/$ThemeButton";
import { cn } from "@/utils/tailwind.util";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <header
      class={cn(
        "flex justify-center items-end w-full h-26 pt-5 mb-5 bg-background",
        [
          "md:justify-between",
          "md:items-center",
          "md:sticky",
          "md:top-0",
          "md:pb-5",
          "md:z-10",
        ]
      )}
    >
      <h1>
        <a class="cursor-pointer" href="/">
          <div class="flex items-center">
            <img
              alt="icon"
              class="w-12 h-12 rounded-lg"
              src="/images/icon.jpg"
            />
            <span
              class={cn(
                "ml-3 text-3xl tracking-wider font-alfa-slab-one",
                "transition-all duration-700 ease-out opacity-100"
              )}
            >
              guccigu blog
            </span>
          </div>
        </a>
      </h1>
      <div class="flex justify-center items-center gap-5">
        <nav
          class={cn(
            "fixed inset-0 z-10",
            "transition-all duration-700 ease-out backdrop-blur-md",
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none",
            "md:relative md:inset-auto md:opacity-100 md:pointer-events-auto"
          )}
        >
          <ul
            class={cn(
              "flex flex-col gap-5 justify-center items-center",
              "absolute top-60 left-1/2 -translate-x-1/2",
              "md:relative md:top-0 md:translate-x-0 md:left-0 md:flex-row"
            )}
          >
            <li>
              <a
                class="cursor-pointer text-center text-2xl tracking-wider font-alfa-slab-one hover:text-gray-500"
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Top
              </a>
            </li>
            <li>
              <a
                class="cursor-pointer text-center text-2xl tracking-wider font-alfa-slab-one hover:text-gray-500"
                href="/"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                class="cursor-pointer text-center text-2xl tracking-wider font-alfa-slab-one hover:text-gray-500"
                href="/about"
                onClick={() => setMenuOpen(false)}
              >
                About
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={cn(
            "fixed top-7 right-5 z-20",
            "flex items-center gap-3",
            "md:relative md:top-0 md:right-0"
          )}
        >
          <HamburgerMenu
            isMenuOpen={isMenuOpen}
            onClick={() => setMenuOpen(!isMenuOpen)}
          />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
