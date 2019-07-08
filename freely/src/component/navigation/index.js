import React from 'react';
import "./navigation.css";

const Navigation = () => {
  return (
    <div className = "navigation__container">
      <div className="navigation__logo">
        {/* Logo Here */}
      </div>

      <div className="navigation">
        <nav>
          <ul>
            <li>Home</li>
            <li>Relax</li>
            <li>About Us</li>
          </ul>
        </nav>
      </div>

    </div>
  );
};

export default Navigation;