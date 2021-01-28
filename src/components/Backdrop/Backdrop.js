import React, { useRef } from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import classes from "./Backdrop.module.css";

function Backdrop({ toggleClass, closed }) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={toggleClass}
      unmountOnExit
      mountOnEnter
      timeout={400}
      classNames={{
        enter: classes["fade-enter"],
        enterActive: classes["fade-enter-active"],
        exit: classes["fade-exit"],
        exitActive: "",
      }}
    >
      <div ref={nodeRef} className={classes.Backdrop} onClick={closed}></div>
    </CSSTransition>
  );
}

export default Backdrop;
