import ThemeButton from "@/layouts/$ThemeButton";

export default function Header() {
  return (
    <header class="flex justify-between items-center w-full pt-5 mb-5 md:mb-0 md:pb-5">
      <h1>
        <a class="cursor-pointer" href="/">
          <div class="flex font-medium items-center text-gray-900 dark:text-foreground">
            <img alt="icon" class="w-10 h-10" src="/images/icon.jpg" />
            <span class="ml-3 text-xl tracking-wider font-anton">
              guccigu blog
            </span>
          </div>
        </a>
      </h1>
      <nav>
        <ul class="flex flex-grow justify-end items-center gap-x-3 md:gap-x-5 md:pr-5 text-gray-600 dark:text-foreground">
          <li>
            <ThemeButton />
          </li>
          <li>
            <a
              class="cursor-pointer text-center hover:text-gray-900 dark:hover:text-gray-500"
              href="/"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              class="cursor-pointer text-center hover:text-gray-900 dark:hover:text-gray-500"
              href="/about"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
