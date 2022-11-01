import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full flex flex-col items-center border-b backdrop-blur">
      <div className="w-3/4 flex items-center ">
        <Link to="/">
          <h1 className="text-4xl py-4">Meli ToM</h1>
        </Link>
      </div>
    </nav>
  );
}
