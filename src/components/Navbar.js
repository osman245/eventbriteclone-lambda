import React from "react";
import "bootstrap";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light text-light bg-dark ">
    <a href="/" className="hover navbar-brand text-light">
      <span
        width="15"
        height="15"
        className="logo-font font-weight-bold pt-0 pb-0 pr-3 pl-3 border border-secondary rounded d-inline-block align-top"
        alt=""
      >
        E
      </span>
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  ">
        <li className="nav-item ">
          <a className="nav-link text-light" href="/addEvent">
            Add Event <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-light" href="/">
            Show All Events
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
