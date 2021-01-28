import React from "react";
import classes from "./PostParagraph.module.css";

function PostParagraph({ children }) {
  return (
    <div className={classes.paragraph_box}>
      <p className={classes.paragraph}>{children}</p>
    </div>
  );
}

export default PostParagraph;
