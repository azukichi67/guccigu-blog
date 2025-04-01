import ThemeButton from "@/layouts/$ThemeButton";

export default function Header() {
  return (
    <header class="flex justify-between items-center w-full pt-5 md:pb-5 px-5 md:px-10 mx-2">
      <a class="cursor-pointer" href="/">
        <div class="flex font-medium items-center text-gray-900 dark:text-foreground mb-4 md:mb-0">
          <img alt="icon" class="w-10 h-10" src="/images/icon.jpg" />
          <span class="ml-3 text-xl">guccigu blog</span>
        </div>
      </a>
      <nav class="flex flex-grow justify-end items-center gap-x-3 md:gap-x-5 md:pr-5  text-gray-600 dark:text-foreground">
        <ThemeButton />
        <a
          class="cursor-pointer text-center hover:text-gray-900 dark:hover:text-gray-500"
          href="/"
        >
          Blog
        </a>
        <a
          class="cursor-pointer text-center hover:text-gray-900 dark:hover:text-gray-500"
          href="/about"
        >
          About
        </a>
      </nav>
    </header>
  );
}
