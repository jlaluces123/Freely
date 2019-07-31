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
        <p className = "home__paragraph">
          With a simple click, improve your day or take the break you need from a busy day. Music will automatically play
          and you can just sit back and enjoy.

          <br />
          <br />

          Take your meditation on the go! Your iOS or Android device can play the music in the background, saving you battery and
          headaches.
        </p>
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