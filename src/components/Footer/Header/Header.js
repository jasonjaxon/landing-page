import React from "react";
import classes from "./Header.module.css";

function Header({ children }) {
  return <h3 className={classes.header}>{children.toUpperCase()}</h3>;
}

export default Header;
