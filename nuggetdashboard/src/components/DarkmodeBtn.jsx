import { useEffect, useState } from "react";

function DarkModeBtn() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-800 dark:text-white p-3 max-sm:hidden rounded-full hover:bg-gray-600 transition"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default DarkModeBtn;
