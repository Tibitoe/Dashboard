import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/bitcoin-btc-logo.png"
              alt="Bitcoin Bros Logo"
              className="h-10"
            />
            <span className="text-lg font-semibold dark:text-white">
              Bitcoin Bros
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-5 mt-4 md:mt-0">
            <NavLink
              to="/"
              className="hover:text-gray-900 dark:hover:text-white hover:underline decoration-amber-300 underline-offset-6"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              className="hover:text-gray-900 dark:hover:text-white hover:underline decoration-amber-300 underline-offset-6"
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/calc"
              className="hover:text-gray-900 dark:hover:text-white hover:underline decoration-amber-300 underline-offset-6"
            >
              Calculator
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-gray-900 dark:hover:text-white hover:underline decoration-amber-300 underline-offset-6"
            >
              About
            </NavLink>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-6 text-sm">
          <p>📍 Moon Base Alpha, Crater 42</p>
          <p>📞 +1-800-BTC-MOON</p>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4 text-xs text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Bitcoin Bros. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
