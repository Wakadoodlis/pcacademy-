/*
 * SignupPage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

/* eslint-disable react/prefer-stateless-function */
export default class SignupPage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <h1> Cia yra SignupPage </h1>
        <div className="container">
          <form action="">
            <label htmlFor="">vardas</label>
            <input type="text" />
            <label htmlFor="">el. pastas</label>
            <input type="text" />
          </form>
        </div>
      </div>
    );
  }
}
