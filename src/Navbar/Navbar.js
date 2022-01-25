import React, { useState } from "react";
import "./Navbar.css";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

//Using NavLink, we can make SPA without reloading page

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });
  //exact in link USED to define the exact Path and discourage the relative PATH, exact helps to define the exact paths
  //activeClassName is used to define the current active/Hovered page Item using CSS
  //if we dont use exact, then Home page always remain active

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav>
      <div className="logo">
        VPN<font>Lab</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {clicked ? (
          <MdCancel
            style={{
              fontSize: "24px",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              rotate: "360deg",
            }}
          />
        ) : (
          <GiHamburgerMenu
            style={{
              fontSize: "24px",
              cursor: "pointer",
              transition: "all 0.2s ease-in-out",
              rotate: "180deg",
            }}
          />
        )}
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
    </nav>
  );
};

export default Navbar;
// continue from 32:00
