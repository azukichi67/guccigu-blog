export default function Header() {
  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap py-5 px-2 md:flex-row items-center">
        <a class="cursor-pointer" href="/">
          <div class="flex tiimagetle-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img alt="icon" class="w-10 h-10" src="/images/icon.jpg" />
            <span class="ml-3 text-xl">guccigu blog</span>
          </div>
        </a>
        <nav class="flex flex-grow justify-end">
          <a class="cursor-pointer mr-5 hover:text-gray-900" href="/">
            Blog
          </a>
          <a class="cursor-pointer mr-5 hover:text-gray-900" href="/">
            About
          </a>
        </nav>
      </div>
    </header>
  );
}
