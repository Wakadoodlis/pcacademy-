import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';

/* eslint-disable react/prefer-stateless-function */
export default class InfoPage extends React.PureComponent {
  render() {
    return (
      <div className={style.infoWraper}>
        <h5 className={style.infoH}>
          Oh..Shoot! Tikriausiai lyja ir jokiu susitikimu nenumatyta.
          <br />
          <br />
          Jau sviecia saule?
        </h5>
        <Link to="#" className={style.rideStyle}>
          Taip!
        </Link>
      </div>
    );
  }
}
