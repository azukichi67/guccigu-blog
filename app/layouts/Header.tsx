export default function Header() {
  return (
    <header class="flex justify-between items-center w-full pt-5 md:pb-5 px-5 md:px-10 mx-2">
      <a class="cursor-pointer" href="/">
        <div class="flex font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img alt="icon" class="w-10 h-10" src="/images/icon.jpg" />
          <span class="ml-3 text-xl">guccigu blog</span>
        </div>
      </a>
      <nav class="flex flex-grow gap-x-3 md:gap-x-5 md:pr-5 justify-end text-gray-600">
        <a class="cursor-pointer text-center hover:text-gray-900" href="/">
          Blog
        </a>
        <a class="cursor-pointer hover:text-gray-900" href="/about">
          About
        </a>
      </nav>
    </header>
  );
}
