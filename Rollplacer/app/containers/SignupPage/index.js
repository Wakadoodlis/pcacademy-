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
import SocialButtons from '../../components/SocialButtons/SocialButtons';

import style from './style.css';

/* eslint-disable react/prefer-stateless-function */
export default class LoginPage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className={style.signupWraper}>
            <h1> PRISIJUNK</h1>
            <SocialButtons />
            <h4>arba prisijunk su el. pastu</h4>
            <form action="">
              <label htmlFor="email">El. pastas</label>
              <input type="text" name="email" />
              <label htmlFor="password">Slaptažodis</label>
              <input
                type="password"
                name="password"
                className={style.inputSignup}
              />
              <p>
                {
                  ' Jūsų duomenys nebus naudojami ar renkami komerciniais tikslais. Paspausdami "Registruotis" Jūs turėsite galimyne naudotis visomis tinklapyje veikiančiomis funkcijomis: "Įdėti naują vietą. ją redaguoti", "komentuoti kitas pridėtas vietas, jas vertinti", "organizuoti susitikimus", bei kt.. '
                }
              </p>
              <button type="button" className={style.btnReg}>
                Registruotis
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
