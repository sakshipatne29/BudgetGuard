import React from "react";
import "./css/Sidebar.css";

export default function Navbar(props) {
  return (
    <>
      <nav
        className="navbar navbar-expand d-flex flex-column align-item-start"
        id="sidebar"
      >
        <a href="/" className="navbar-brand text-light mt-5">
          <div className="display-5 font-weight-bold">THANOS</div>
        </a>
        <ul className="navbar-nav d-flex flex-column mt-5 w-100">
          <li className="nav-item w-100">
            <a href="/" className="nav-link text-light pl-4">
              Home
            </a>
          </li>
          <li className="nav-item w-100">
            <a href="/" className="nav-link text-light pl-4">
              About
            </a>
          </li>
          <li className="nav-item w-100">
            <a href="/" className="nav-link text-light pl-4">
              Blog
            </a>
          </li>
          <li className="nav-item dropdown w-100">
            <a
              href="#"
              className="nav-link dropdown-toggle text-light pl-4"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Service
            </a>
            <ul
              className="dropdown-menu w-100"
              aria-labelledby="navbarDropdown"
            >
              <li>
                <a href="/" className="dropdown-item text-light pl-4 p-2">
                  Service 01
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item text-light pl-4 p-2">
                  Service 02
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item text-light pl-4 p-2">
                  Service 03
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item w-100">
            <a href="/" className="nav-link text-light pl-4">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
