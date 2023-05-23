import { Link, useLocation } from "@remix-run/react";
import { NavLink } from "~/root";
import { BurgerMenu } from "./Basics/BurgerMenu";

export const NavBar = ({ navInfo }: { navInfo: NavLink[] }) => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <div className="navbar bg-base-100 opacity-80 z-10 fixed top-0 w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <BurgerMenu />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navInfo?.map((navItem: NavLink, key) => (
              <li
                className="hover:text-special active:bg-syprimaryHover focus:bg-syprimaryHover"
                key={key}
              >
                <Link to={navItem.url}>
                  <a>{navItem.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to={"/"}>
          <a className="btn btn-ghost normal-case text-xl hover:text-special">
            Sybersyn
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {navInfo?.map((navItem: NavLink, key) => (
            <li
              className={
                location.pathname === navItem.url
                  ? "text-special underline underline-offset-4"
                  : "hover:text-special active:bg-syprimaryHover focus:bg-syprimaryHover"
              }
              key={key}
            >
              <Link to={navItem.url}>
                <a>{navItem.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/subscribe"}>
          <a className="btn btn-sytertiary hover:text-special">Subscribe</a>
        </Link>
      </div>
    </div>
  );
};
