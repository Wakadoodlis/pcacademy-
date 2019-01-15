import React from 'react';
import { Link } from 'react-router-dom';
import RollVid from './rollPlaces.mp4';
import style from './style.css';

const HeroVid = () => (
  <div className={style.homeWraper}>
    <video src={RollVid} autoPlay muted width="100%" />
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
);

export default HeroVid;
