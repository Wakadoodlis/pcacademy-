import React from "react";
import RollVid from "../rollPlaces.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-wraper">
      <video src={RollVid} autoPlay loop className="hero-video" />
      <div className="home-text">
        <h1 className="mainh1"> Do You love to Roll ? </h1>
        <h5>Join us, and find a perfect place to do that!</h5>
        <Link to="/signup">
          <button className="hero-btn"> Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
