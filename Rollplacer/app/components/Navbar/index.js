import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import SignupDialog from '../signupDialog';

const ulStyle = {
  color: '#333',
};

const Navbar = () => (
  <nav className={style.wraperNav}>
    <div className="container">
      <Link to="/" className="brand-logo">
        Roll Places
      </Link>
    </div>
    <ul className="right" style={ulStyle}>
      <li>
        <Link to="/">Namai</Link>
      </li>
      <li>
        <Link to="/places">Surask vieta</Link>
      </li>
      <li>
        <Link to="/login">Prisijungti</Link>
      </li>
      <li className={style.paddingR}>
        <SignupDialog />
      </li>
    </ul>
  </nav>
);

export default Navbar;
