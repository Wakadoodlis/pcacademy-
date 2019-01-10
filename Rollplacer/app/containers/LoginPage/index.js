/*
 * SignupPage
 */

import React from 'react';
import NavBar from '../../components/Navbar/Navbar';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-dom';
import style from './style.css';
import SocialButtons from '../../components/SocialButtons/SocialButtons';
import RegBtn from '../../components/RegBtn/RegBtn';

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
            <p>
              Dar neregistruotas narys? <a href="/signup">Registruokis!</a>{' '}
            </p>
            <div className="divider" />
            <SocialButtons />
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
              <RegBtn />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
