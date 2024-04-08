import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header wrapper">
        <div className="header-logo">
          <Link to="/">Home</Link>
        </div>

        <ul className="header-ul">
          <li>
            <Link to="/">
              <span className="material-symbols-outlined">home</span>
            </Link>
          </li>
          <li>
            <Link to="/workers">
              <span className="material-symbols-outlined">group_add</span>
            </Link>
          </li>
          <li>
            <Link to="/tasks">
              <span className="material-symbols-outlined">task</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
