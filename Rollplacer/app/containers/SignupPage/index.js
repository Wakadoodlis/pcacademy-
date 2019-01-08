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
import SocialButtons from '../../components/SocialButtons/SocialButtons';

/* eslint-disable react/prefer-stateless-function */
export default class SignupPage extends React.PureComponent {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="divider" />
          <br />
          <br />
          <div className={style.formWrap}>
            <h4 className={style.mainHeader}>Prisijunk!</h4>
            <SocialButtons />
            <form action="">
              <label htmlFor="name">Vardas</label>
              <input type="text" name="name" />
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
