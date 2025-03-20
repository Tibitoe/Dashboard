import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      <nav className="flex justify-center gap-12 mb-4 mt-4 bg-gray-300 dark:bg-gray-800 rounded-2xl">
        <NavLink
          to="/about/faq"
          end
          className={({ isActive }) =>
            `text-gray-900 bg-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-200 hover:bg-gray-700 hover:text-white border-2 border-gray-300 hover:border-amber-300 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? "!bg-gray-700 !text-white !border-amber-300" : ""
            }`
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="/about/contact"
          end
          className={({ isActive }) =>
            `text-gray-900 bg-gray-300 dark:bg-gray-800 dark:border-gray-800 dark:text-gray-200 hover:bg-gray-700 hover:text-white border-2 border-gray-300 hover:border-amber-300 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? "!bg-gray-700 !text-white !border-amber-300" : ""
            }`
          }
        >
          Contact
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
