import React from "react";
import { v4 as uuid } from "uuid";

import classes from "./PostDesc.module.css";

function PostDesc({ children }) {
  return (
    <div className={classes.desc}>
      {children.map(item => (
        <div key={uuid()}>{item}</div>
      ))}
    </div>
  );
}

export default PostDesc;
