import React from 'react';
import NavBar from '../../components/Navbar';
import SocialButtons from '../../components/SocialButtons';
import RegBtn from '../../components/RegisterBtn';
import style from './style.css';

/* eslint-disable react/prefer-stateless-function */
export default class SignupPage extends React.PureComponent {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className={style.signupWraper}>
            <h1 className={style.signupH1}> Registruokis!</h1>
            <SocialButtons />
            <form onSubmit={this.onSubmit} className={style.signupForm}>
              <label htmlFor="name">Vardas</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.onChange}
              />
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
