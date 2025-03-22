import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center m-5 text-gray-900 dark:text-gray-200">
      <h2 className="text-8xl font-bold">404</h2>
      <p className="text-3xl"> Sorry, we couldn't find this page.</p>
      <br />
      <p className="text-xl">
        Go back to{" "}
        <Link
          to="/"
          className="text-purple-500 font-bold hover:text-purple-700 dark:hover:text-purple-400"
        >
          Home
        </Link>
      </p>
    </div>
  );
}
