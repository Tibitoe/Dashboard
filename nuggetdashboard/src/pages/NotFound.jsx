import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center m-5 text-gray-900 dark:text-gray-200">
      <h2 className="text-2xl font-bold">Hoppsan, sidan hittades inte!</h2>
      <p>Sidan du försökte nå finns inte.</p>
      <p>
        Gå tillbaka till{" "}
        <Link to="/" className="text-purple-400">
          Hem
        </Link>
      </p>
    </div>
  );
}
