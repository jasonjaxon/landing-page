import React, { Fragment } from "react";
import { v4 as uuid } from "uuid";
import classes from "./NoteBox.module.css";

function NoteBox({ children }) {
  return (
    <div className={classes.noteBox}>
      {children.map(item => (
        <Fragment key={uuid()}>{item}</Fragment>
      ))}
    </div>
  );
}

export default NoteBox;
