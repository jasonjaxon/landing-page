import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import classes from "./ListItem.module.css";

function ListItem() {
  return (
    <div className={classes.Container}>
      <ul className={classes.List}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/mission">Mission</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
      <button className={classes.Btn}>Contact</button>
    </div>
  );
}

export default ListItem;
