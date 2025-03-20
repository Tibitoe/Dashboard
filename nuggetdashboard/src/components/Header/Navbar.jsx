import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import DarkModeBtn from "../DarkmodeBtn";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Håller tabbningen inom menyn
  useEffect(() => {
    if (isOpen) {
      const focusableElements = menuRef.current.querySelectorAll("a");
      const firstElement = closeButtonRef.current;
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);

      return () => {
        document.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [isOpen]);

  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Savings Calculator", path: "/calc" },
    { name: "About us", path: "/about" },
  ];

  return (
    <>
      <nav className="bg-gray-300 dark:bg-gray-800 sm:flex place-content-end">
        <div className="flex items-center w-fit max-sm:hidden">
          <NavLink to="/" tabIndex="-1">
            <img
              src="/bitcoin-btc-logo.png"
              alt="Logo"
              className="h-10 w-auto ml-1"
            />
          </NavLink>
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-12">
            <div className="flex-1 flex items-center justify-start sm:items-stretch">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex gap-5 ">
                  {links.map(({ name, path }) => (
                    <NavLink
                      key={name}
                      to={path}
                      className={({ isActive }) =>
                        `text-gray-900 hover:bg-gray-700 hover:text-white border-2 border-gray-300 dark:text-gray-200 dark:border-gray-800 hover:border-amber-300 px-3 py-2 rounded-md text-sm font-medium ${
                          isActive
                            ? "!bg-gray-700 !text-white !border-amber-300"
                            : ""
                        }`
                      }
                    >
                      {name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                ref={closeButtonRef}
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open Menu</span>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div ref={menuRef} className="sm:hidden" id="mobile-menu">
            <div className="flex flex-col space-y-1 px-2 pt-2 pb-3 text-center">
              {links.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) =>
                    `text-gray-900 dark:text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-4  rounded-md text-base font-medium ${
                      isActive
                        ? "!bg-gray-700 !text-white !border-amber-300"
                        : ""
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
        <DarkModeBtn />
      </nav>
    </>
  );
};

export default Navbar;
