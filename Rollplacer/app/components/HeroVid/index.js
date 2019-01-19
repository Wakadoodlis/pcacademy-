import React from 'react';
import { Link } from 'react-router-dom';
import RollVid from './rollPlaces.mp4';
import style from './style.css';

const HeroVid = () => (
  <React.Fragment>
    <div className={style.homeWraper}>
      <video src={RollVid} autoPlay muted loop width="100%" />
      <div className={style.homeText}>
        <h1 className={style.mainh1}> Tau patinka skrosti su riedlente? </h1>
        <h5>Prisijunk! Čia rasi pačias geriausias vietas tą daryti.</h5>
        <Link to="/signup">
          <button type="button" className={style.heroBtn}>
            Registruokis!
          </button>
        </Link>
      </div>
    </div>
    <div className="container">
      <div className={style.linWraper}>
        <Link to="/cruising" className={style.rideStyle}>
          Cruising/Carving
        </Link>
        <Link to="/dancing" className={style.rideStyle}>
          Dancing
        </Link>
        <Link to="freestyle" className={style.rideStyle}>
          Freestyle
        </Link>
        <Link to="/freeride" className={style.rideStyle}>
          Freeride
        </Link>
        <Link to="/downhill" className={style.rideStyle}>
          Downhill
        </Link>
      </div>
    </div>
    <hr className={style.hrStyle} />
  </React.Fragment>
);

export default HeroVid;
