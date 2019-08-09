import React from 'react';
import "./navigation.css";

/* Component Import */
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className = "navigation__container">
      {/* Left Side of nav */}
      <div className = "navigation__logo">
        <h3 className = "navigation__header">Freely</h3>
      </div>

      {/* Right Side of nav */}
      <div className = "navigation">
        <ul className = "navigation__list">
          <li className = "navigation__item"><Link className = "navigation__link" to = "/">Home</Link></li>
          <li className = "navigation__item"><Link className = "navigation__link" to = "/relax">Relax</Link></li>
          {/* <li className = "navigation__item"><Link className = "navigation__link" to = "/about-us">About Us</Link></li> */}
        </ul>
      </div>

    </div>
  );
};

export default Navigation;