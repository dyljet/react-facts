import React from "react";
import logo from "./../images/react-icon-small.png";
function Navbar() {
  return (
    <nav>
      <img id="logo" src={logo} alt="logo" />
      <h2>ReactFacts</h2>
      <h3 id='right-side-description'>My First Project</h3>
    </nav>
  );
}

export default Navbar;
