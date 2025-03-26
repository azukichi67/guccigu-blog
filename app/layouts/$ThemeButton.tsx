import { useEffect, useState } from "hono/jsx";

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setIsDarkMode(true);
    }
  };

  return (
    <button class="cursor-pointer hover:opacity-70" onClick={toggleTheme}>
      {isDarkMode ? (
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 12.79A9 9 0 0111.21 3 7 7 0 1021 12.79z" />
        </svg>
      ) : (
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="5" />
          <g stroke="currentColor" stroke-width="2">
            <line x1="12" x2="12" y1="1" y2="5" />
            <line x1="12" x2="12" y1="19" y2="23" />
            <line x1="1" x2="5" y1="12" y2="12" />
            <line x1="19" x2="23" y1="12" y2="12" />
            <line x1="4" x2="6.5" y1="4" y2="6.5" />
            <line x1="17.5" x2="20" y1="17.5" y2="20" />
            <line x1="4" x2="6.5" y1="20" y2="17.5" />
            <line x1="17.5" x2="20" y1="6.5" y2="4" />
          </g>
        </svg>
      )}
    </button>
  );
};

export default ThemeButton;
