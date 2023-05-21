import { Link } from "@remix-run/react";

export const NavBar = () => (
  <div className="navbar bg-base-100 opacity-80">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to={"/about"}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link to={"/listen"}>
              <a>Listen</a>
              {/* TODO: Use dynamic values  */}
            </Link>
          </li>{" "}
          <li>
            <Link to={"/latest"}>
              <a>Latest</a>
            </Link>
          </li>
        </ul>
      </div>
      <Link to={"/"}>
        <a className="btn btn-ghost normal-case text-xl">Sybersyn</a>
      </Link>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        <li>
          <Link to={"/about"}>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link to={"/listen"}>
            <a>Listen</a>
            {/* TODO: Use dynamic values  */}
          </Link>
        </li>
        <li>
          <Link to={"/latest"}>
            <a>Latest</a>
          </Link>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <Link to={"/subscribe"}>
        <a className="btn">Subscribe</a>
      </Link>
    </div>
  </div>
);
