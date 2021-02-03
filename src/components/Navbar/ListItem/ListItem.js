import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Button from "./../../Button/Button";
import * as names from "./../../Button/Names";

import classes from "./ListItem.module.css";

function ListItem({ closed }) {
  return (
    <div className={classes.Container}>
      <ul className={classes.List}>
        <li>
          <NavLink onClick={closed} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closed} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closed} to="/mission">
            Mission
          </NavLink>
        </li>
        <li>
          <NavLink onClick={closed} to="/product">
            Product
          </NavLink>
        </li>
      </ul>
      <NavLink className={classes.btnLink} onClick={closed} to="/contact">
        <Button
          type="button"
          btnStyle={names.BTN__PRIMARY__SOLID}
          btnSize={names.BTN__LARGE}
        >
          Contact
        </Button>
      </NavLink>
    </div>
  );
}

export default ListItem;
