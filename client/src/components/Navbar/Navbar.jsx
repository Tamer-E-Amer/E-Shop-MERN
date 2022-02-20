/**
 * @description nav bar component logo search login-register and cart
 */
import React from "react";
//css
import "../../assets/css/Navbar/navbar.css";
// images
import logo from "../../assets/img/logo.png";
//icons
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="app__navbar">
      <img src={logo} alt="logo" className="app__navbar__logo" />
      <div className="app__navbar__search-container">
        <input
          type="text"
          name="search"
          id="search"
          className="app__navbar__search-container__search"
        />
        <AiOutlineSearch color="#FA58B6" size={30} className="searc_icon" />
      </div>
      <div className="app__navbar__login-register">login | Register</div>
      <div className="app__navbar__cart">
        <AiOutlineShoppingCart color="#1A1A40" size={30} />
      </div>
    </div>
  );
};

export default Navbar;
