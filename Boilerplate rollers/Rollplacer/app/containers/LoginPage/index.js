/*
 * LoginPage
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
export default class LoginPage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <h1> Cia yra LoginPage </h1>
        <form action="">
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <button type="button">Login</button>
        </form>
      </div>
    );
  }
}
