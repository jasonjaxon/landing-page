import React, { memo } from "react";
import classes from "./Slide.module.css";

function Slide({ url, width }) {
  return (
    <div style={{ width: `${width}px` }} className={classes.slide}>
      <img src={url} alt="Slide" />
    </div>
  );
}

export default memo(Slide);
