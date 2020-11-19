import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <NavLink exact to={"/"} className="navbar-brand">
        News
      </NavLink>
      <button
        className="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">
              Top Headlines-WorldWide
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/top-us" className="nav-link">
              Top Headlines-US
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
