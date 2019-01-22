/*
 * SignupPage
 */

import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.css';
import SocialButtons from '../../components/SocialButtons';
import RegBtn from '../../components/RegisterBtn';

/* eslint-disable react/prefer-stateless-function */
export default class LoginPage extends React.PureComponent {
  state = {
    email: '',
    password: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <div className="container">
          <br />
          <br />
          <div className={style.formWrap}>
            <h4 className={style.mainHeader}>Prisijunk!</h4>
            <p>
              Dar neregistruotas narys? <Link to="/signup">Registruokis!</Link>
            </p>
            <SocialButtons />
            <form onSubmit={this.onSubmit} className={style.marginT}>
              <label htmlFor="email">El. pastas</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.onChange}
              />
              <label htmlFor="password">Slaptažodis</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.onChange}
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
