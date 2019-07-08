import React from 'react';
import "./navigation.css";

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
          <li className = "navigation__item">Home</li>
          <li className = "navigation__item">Relax</li>
          <li className = "navigation__item">About Us</li>
        </ul>
      </div>

    </div>
  );
};

export default Navigation;