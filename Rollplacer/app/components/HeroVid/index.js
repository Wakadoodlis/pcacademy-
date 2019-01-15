import React from 'react';
import { Link } from 'react-router-dom';
import RollVid from './rollPlaces.mp4';
import style from './style.css';

const HeroVid = () => (
  <div className={style.homeWraper}>
    <video src={RollVid} autoPlay isLooping shouldPlay muted width="100%" />
    <div className={style.homeText}>
      <h1 className={style.mainh1}> Do You love to Roll ? </h1>
      <h5>Join us, and find a perfect place to do that!</h5>
      <Link to="/signup">
        <button type="button" className={style.heroBtn}>
          Sign up
        </button>
      </Link>
    </div>
  </div>
);

export default HeroVid;
