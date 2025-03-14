import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="text-center m-5">
      <h2>Hoppsan, sidan hittades inte!</h2>
      <p>Sidan du försökte nå finns inte.</p>
      <p>
        Gå tillbaka till <Link to="/">Hem</Link>
      </p>
    </div>
  );
}
