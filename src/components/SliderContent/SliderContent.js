import React, { forwardRef, memo } from "react";
import classes from "./SliderContent.module.css";

function SliderContent(
  { children, width, transition, translate, activeSlide },
  ref
) {
  return (
    <div
      ref={ref}
      style={{
        width: `${width}px`,
        transitionDuration: `${transition}s`,
        transform: `translateX(-${activeSlide * translate}px)`,
      }}
      className={classes.sliderContent}
    >
      {children}
    </div>
  );
}

const forwardedRef = forwardRef(SliderContent);

export default memo(forwardedRef);
