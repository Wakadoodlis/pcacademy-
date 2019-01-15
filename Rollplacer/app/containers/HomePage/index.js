import React from 'react';
import NavBar from '../../components/Navbar';
import HeroVid from '../../components/HeroVid';

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
