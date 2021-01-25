import React from "react";
import classes from "./Backdrop.module.css";

function Backdrop({ toggleClass, closed }) {
  const backDropClasses = [
    classes.Backdrop,
    toggleClass === true ? classes.open : classes.close,
  ].join(" ");
  return <div onClick={closed} className={backDropClasses}></div>;
}

export default Backdrop;
