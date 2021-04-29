import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <Link to="/">
          <img
            className="logo"
            alt=""
            src="https://cdn.freelogovectors.net/wp-content/uploads/2019/02/truecaller_logo.png"
          />
        </Link>
      </div>

      <div className="header_center">
        <input type="text" />
        <SearchIcon className="searchicon" />
      </div>
      <div className="header_right">
        <Link
          style={{ fontWeight: 700, color: "#262626", textDecoration: "none" }}
          to=""
        >
          <h4 className="link">VISIT TRUECALLER.COM</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
