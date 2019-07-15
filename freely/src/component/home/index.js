import React from 'react';
import { Link } from "react-router-dom";
import "./home.css";

/* image import */
import MeditationImg from "../../assets/meditation.png";

const Home = () => {
  return (
    <div className = "home">
      <div className = "home__left col__50">
        {/* Content Here */}
        <h3 className = "home__header">Improve Your Hectic Day</h3>
        <h2 className = "home__header home__header--bold">Relax and Focus in No Time</h2>
        <p className = "home__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, molestiae recusandae fuga sunt a consectetur sequi facilis impedit doloremque vitae.</p>
        <Link className = "home__btn" to = "/relax">Try It</Link>
      </div>

      <div className = "home__right col__50">
        {/* Image Here */}
        <img className = "home__img" src={MeditationImg} alt="Icon for a person sitting criss cross"/>
      </div>
    </div>
  );
}

export default Home;