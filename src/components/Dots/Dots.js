import React, { memo } from "react";
import classes from "./Dots.module.css";

function Dot({ clicked, activeSlide }) {
  return (
    <span
      style={{ backgroundColor: activeSlide && "#000" }}
      onClick={clicked}
      className={classes.dot}
    ></span>
  );
}

function Dots({ clicked, slides, activeSlide }) {
  const _slides = slides.slice(1, slides.length - 1);
  return (
    <div className={classes.dots}>
      {_slides.map((dot, i) => (
        <Dot
          key={Math.random() * 100000}
          activeSlide={activeSlide === i + 1}
          clicked={() => clicked(i)}
        />
      ))}
    </div>
  );
}

export default memo(Dots);
