import React from 'react';
import NavBar from '../../components/Navbar';
import HeroVid from '../../components/HeroVid';
import InfoPage from '../InfoPage';

// import SignupDialog from '../../components/signupDialog/SignupDialog';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <HeroVid />
        <InfoPage />
      </div>
    );
  }
}
