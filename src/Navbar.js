import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__text">React Quotes App</div>
      <div className="navbar__gitHubLogo">
        <a href="https://github.com/TomcyT/react-qoutes-app" target="_blank">
          <img
            src="https://img.icons8.com/ios-glyphs/344/github.png"
            alt="github Logo"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
