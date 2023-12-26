import React from 'react';
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import logoImage from "../../src/Images/logo-videojet.jpg";



function Header() {
    return (
      <div>
        <div className="header">
          <img
            src={logoImage}
            alt=""
            className="header__logo"
          />
          <div className="header__topic">
            <h1>Videojet Information System</h1>
          </div>
          <div className="header__search">
            <input type="text" className="header__searchInput" />
            <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__search__text">
          <p>Search using Serial No</p>
        </div>
        </div>
      </div>
    );
}

export default Header