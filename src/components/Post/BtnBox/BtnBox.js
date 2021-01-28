import React from "react";
import qty from "./../../../utility/qty";
import classes from "./BtnBox.module.css";

function BtnBox({ children }) {
  return <div className={classes.btnBox}>{qty(children)}</div>;
}

export default BtnBox;
