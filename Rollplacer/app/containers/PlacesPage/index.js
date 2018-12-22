/*
 * PlacesPage
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

/* eslint-disable react/prefer-stateless-function */
export default class PlacesPage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <h1> Cia yra PlacesPage Page</h1>
      </div>
    );
  }
}
