import React from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import style from './style.css';
import SignupDialog from '../signupDialog/SignupDialog';

const Navbar = () => (
  <nav className={style.wraperNav}>
    <div className="container">
      <Link to="/" className="brand-logo">
        Roll Places
      </Link>
    </div>
    <ul className="right">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/login">Log in</Link>
      </li>
      <li>
        <SignupDialog />
      </li>
    </ul>
  </nav>
);

export default Navbar;
