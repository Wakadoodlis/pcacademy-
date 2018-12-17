import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Roll'Places</a>
      </div>
      <ul className="right">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
