import {
  FiBell,
  FiSearch
} from "react-icons/fi";

export default function Navbar() {

  return (

    <header className="navbar">

      <div className="search">

        <FiSearch />

        <input
          placeholder="Search..."
        />

      </div>

      <div className="right">

        <button className="icon">

          <FiBell />

        </button>

        <img
          src="https://i.pravatar.cc/80"
          alt="avatar"
        />

      </div>

    </header>

  );
}