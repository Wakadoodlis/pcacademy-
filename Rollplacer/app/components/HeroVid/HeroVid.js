import React from 'react';
import RollVid from './rollPlaces.mp4';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import style from './style.css';

const HeroVid = () => {
  return (
    <div className={style.homeWrape} r>
      <video src={RollVid} autoPlay loop className="heroVideo" width="100%" />
      <div className={style.homeText}>
        <h1 className={style.mainh1}> Do You love to Roll ? </h1>
        <h5>Join us, and find a perfect place to do that!</h5>
        <Link to="/signup">
          <button className={style.heroBtn}> Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroVid;
