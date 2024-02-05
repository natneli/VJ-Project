import React from 'react';
import {  Link,Navigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import logoImage from "../../src/Images/logo-videojet.jpg";





function Header() {
    return (
      <div>
        <div className="header">
          <Link to="/Login">
            <img src={logoImage} alt="" className="header__logo" />
          </Link>
          <div className="header__topic">
            <Link to="/Home">
              <h2>Videojet Service Information System</h2>
            </Link>
          </div>
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
          </div>
          <div>
            <p className="header__search__text">Search Using Serial No</p>
          </div>
        </div>
      </div>
    );
}

export default Header


