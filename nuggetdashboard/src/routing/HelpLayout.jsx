import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      <nav className="flex justify-center gap-12 mb-4 mt-4 bg-gray-300 dark:bg-gray-800 rounded-2xl">
        <NavLink
          to="/about/faq"
          end
          className={({ isActive }) =>
            `text-gray-900 hover:bg-gray-700 hover:text-white dark:text-gray-200 hover:underline underline-offset-4 decoration-amber-300 decoration-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? "!bg-gray-700 !text-white !underline" : ""
            }`
          }
        >
          FAQ
        </NavLink>
        <NavLink
          to="/about/contact"
          end
          className={({ isActive }) =>
            `text-gray-900 hover:bg-gray-700 hover:text-white dark:text-gray-200 hover:underline underline-offset-4 decoration-amber-300 decoration-2 px-3 py-2 rounded-md text-sm font-medium ${
              isActive ? "!bg-gray-700 !text-white !underline" : ""
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
