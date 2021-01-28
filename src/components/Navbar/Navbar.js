import React from "react";
import MenuIcon from "./../MenuIcon/MenuIcon";
import Logo from "./../Logo/Logo";
import ListItem from "./ListItem/ListItem";

import classes from "./Navbar.module.css";

function Navbar({ clicked, isMobile }) {
  return (
    <div className={classes.Navbar}>
      <div className={classes.container}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <div onClick={clicked} className={classes.MenuIcon}>
          <MenuIcon />
        </div>

        {!isMobile && <ListItem />}
      </div>
    </div>
  );
}

export default Navbar;
