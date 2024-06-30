import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Početna strana</Link>
              </li>

              <li>
                <Link>Cene</Link>
              </li>
              <li>
                <Link to="/galerija">Galerija</Link>
              </li>

              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">Start Fitness</a>
        </div>
        <div className="navbar-end gap-3">
          <span className="btn btn-ghost btn-circle">
            <FaPhoneAlt size={20} className="hidden md:block" />
          </span>
          <span className="underline p-2 hidden md:block">+381 64 4865787</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
