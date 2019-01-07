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
import { Link } from 'react-dom';
import style from './style.css';

/* eslint-disable react/prefer-stateless-function */
export default class SignupPage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h5>
            {' '}
            Žinai puikių vietų ne tik savo, bet ir kitame mieste? - prisijunk,
            įkelk, pakviesk kitus, riedėk ne vienas!
          </h5>
          <div className="divider" />
          <br />
          <br />
          <div className="row">
            <div className="col s5">
              <form action="">
                <label htmlFor="name">vardas</label>
                <input type="text" name="name" />
                <label htmlFor="email">el. pastas</label>
                <input type="text" name="email" />
                <button type="button" className={style.btnReg}>
                  Registruotis
                </button>
              </form>
            </div>
            <div className="col s1"> arba</div>
            <div className="col s5">
              <button type="button" className={style.btnRegFb}>
                <span className={style.spanFb}>f</span> Registruotis su Facebook
              </button>
              <button type="button" className={style.btnRegGplus}>
                <span className={style.spanG}>
                  G <span className={style.gPlus}>+</span>
                </span>
                Registruotis su Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
