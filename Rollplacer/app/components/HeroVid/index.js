import React from 'react';
import { Link } from 'react-router-dom';
import RollVid from './rollPlaces.mp4';
import style from './style.css';

const heroBtn = {
  display: 'block',
  margin: '0 auto',
  width: '300px',
  height: '60px',
  color: '#fff',
  borderRadius: '6px',
  border: 'none',
  fontSize: '1.3rem',
  fontWeight: '600',
  backgroundColor: '#f44336',
  transition: '0.5s',
};

const HeroVid = () => (
  <React.Fragment>
    <div className={style.homeWraper}>
      <video src={RollVid} autoPlay muted loop width="100%" />
      <div className={style.homeText}>
        <h1 className={style.mainh1}> Tau patinka skrosti su riedlente? </h1>
        <h5>Prisijunk! Čia rasi pačias geriausias vietas tą daryti.</h5>
        <Link to="/signup">
          <button type="button" className="pulse" style={heroBtn}>
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
