import { Outlet, NavLink } from "react-router-dom";

export default function HelpLayout() {
  return (
    <>
      <nav className="flex justify-center gap-7 mb-4 mt-4">
        <NavLink
          to="/about/faq"
          end
          className={({ isActive }) =>
            `text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white border-2 hover:border-amber-300 px-3 py-2 rounded-md text-sm font-medium ${
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
            `text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white border-2 hover:border-amber-300 px-3 py-2 rounded-md text-sm font-medium ${
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
