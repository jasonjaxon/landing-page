import React from "react";
import MenuIcon from "../MenuIcon/MenuIcon";
import ListItem from "../Navbar/ListItem/ListItem";
import classes from "./SideDrawer.module.css";

function SideDrawer({ toggleClass, closed }) {
  const className = [
    classes.SideDrawer,
    toggleClass === true ? classes.open : classes.close,
  ].join(" ");
  return (
    <div className={className}>
      <div onClick={closed} className={classes.MenuTitle}>
        <h4 className={classes.Header}>Menu</h4>
        <div className={classes.MenuIcon}>
          <MenuIcon />
        </div>
      </div>
      <ListItem closed={closed} />
    </div>
  );
}

export default SideDrawer;
