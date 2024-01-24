import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <>
      <div className="absolute top-0 left-0 h-screen w-screen bg-center bg-cover bg-no-repeat bg-[url('../public/elements_2.png')] opacity-60"></div>
      {/* <div className="navbar bg-base-100 z-10 absolute top-0 left-0 opacity-50">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Homepage</Link>
              </li>
              <li>
                <a>Elements</a>
                <ul className="p-2">
                  <li>
                    <Link href="/en/water">Water</Link>
                  </li>
                  <li>
                    <Link href="/en/fire">Fire</Link>
                  </li>
                  <li>
                    <Link href="/en/wood">Wood</Link>
                  </li>
                  <li>
                    <Link href="/en/metal">Metal</Link>
                  </li>
                  <li>
                    <Link href="/en/earth">Earth</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
      </div> */}
    </>
  );
};

export default navbar;
