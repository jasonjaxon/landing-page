import React, { Fragment } from "react";
import classes from "./Note.module.css";

function Note({ title, desc, children }) {
  return (
    <div className={classes.note}>
      {children}
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.para}>{desc}</p>
    </div>
  );
}

export default Note;
