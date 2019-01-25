import React from 'react';
import HeroVid from '../../components/HeroVid';
import InfoPage from '../InfoPage';
import style from './styles.css';

// import SignupDialog from '../../components/signupDialog/SignupDialog';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className={style.wraper}>
        <HeroVid />
        <InfoPage />
      </div>
    );
  }
}
