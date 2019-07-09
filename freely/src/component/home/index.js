import React from 'react';
import "./home.css";

const Home = () => {
  return (
    <div className = "home">
      <div className = "home__left">
        {/* Content Here */}
        <h3 className = "home__header">Lorem ipsum dolor sit amet.</h3>
        <h2 className = "home__header--bold">Lorem ipsum dolor sit amet consectetur.</h2>
        <p className = "home__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, molestiae recusandae fuga sunt a consectetur sequi facilis impedit doloremque vitae.</p>
      </div>

      <div className = "home__right">
        {/* Image Here */}
        <img src="../assets/meditation.png" alt="Icon for a person sitting criss cross"/>
      </div>
    </div>
  );
}

export default Home;