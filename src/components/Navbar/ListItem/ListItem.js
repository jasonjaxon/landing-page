import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Button from "./../../Button/Button";
import * as names from "./../../Button/Names";

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
      <Button
        type="button"
        btnStyle={names.BTN__PRIMARY__SOLID}
        btnSize={names.BTN__LARGE}
      >
        Contact
      </Button>
    </div>
  );
}

export default ListItem;
