import React, { useState, useEffect, useRef, memo } from "react";
import "./Arrow.css";

function Arrow({ direction, clicked }) {
  const preClass = `load-more ${direction === "next" ? "next" : "prev"}`;
  const [classState, setClassState] = useState(preClass);
  const [moving, setMoving] = useState(false);

  const elRef = useRef();

  useEffect(() => {
    let timer = setTimeout(() => {
      if (moving) {
        setMoving(false);
      }
    }, 600);
    // elRef.current.addEventListener("transitionend", e => {
    //   console.log(e.target);
    //   console.log("shit");
    //   setMoving(false);
    // });
    return () => clearTimeout(timer);
  }, [moving]);

  const clickHandler = e => {
    if (moving === false) {
      clicked();
      setMoving(true);
      setClassState(prev => prev + " active");
      setTimeout(function () {
        setClassState(preClass);
      }, 600);
    }
  };

  return (
    <span
      disabled={moving}
      ref={elRef}
      className={classState}
      onClick={clickHandler}
    ></span>
  );
}

export default memo(Arrow);
