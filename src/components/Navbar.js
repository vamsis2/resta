import React, { useState } from "react";
//import Logo from "../img/res2.png";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
      
        <h1 id="res">RESTAURANT</h1>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About</Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/order"> Order </Link>
          <Link to="/cart"> Cart </Link>
         <Link to="/pizz">Pizz</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/" id="home"> Home </Link>
        <Link to="/menu" id="menu"> Menu </Link>
        <Link to="/about" id="about"> About Us </Link>
        <Link to="/contact" id="contact"> Contact </Link>
        <Link to="/cart" id="cart"> Cart </Link>
        <Link to="/order"  id="cart"> Order </Link>
      
        <Link to="/pizz">Pizz</Link>
       
        <button onClick={toggleNavbar}>
          
        </button>
      </div>
    </div>
  );
}

export default Navbar;