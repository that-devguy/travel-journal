import React from "react";
import Globe from "../images/globe.png";

function Navbar() {
  return (
    <nav className="navbar--container">
      <img className="navbar--logo" src={Globe} alt="globe icon" />
      <h3 className="navbar--title">my travel journal.</h3>
    </nav>
  );
}

export default Navbar;
