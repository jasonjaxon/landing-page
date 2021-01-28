import React from "react";
import classes from "./PostHeader.module.css";

function PostHeader({ children }) {
  return <h1 className={classes.header}>{children}</h1>;
}

export default PostHeader;
