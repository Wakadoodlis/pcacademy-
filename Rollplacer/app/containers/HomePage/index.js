/*
 * HomePage
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
import HeroVid from '../../components/HeroVid/HeroVid';

import PlacesPage from '../PlacesPage';
// import SignupDialog from '../../components/signupDialog/SignupDialog';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <HeroVid />
        <PlacesPage />
      </div>
    );
  }
}
