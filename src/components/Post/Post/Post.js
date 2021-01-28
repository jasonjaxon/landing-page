import React, { Fragment } from "react";
import useObserver from "../../../hooks/useObserver";

import classes from "./Post.module.css";

const options = {
  threshold: 0.4,
};

function Post({ children }) {
  const [setRef, visible] = useObserver(options);

  const content = children.length ? (
    <Fragment>
      <div
        className={`${classes.postContent} ${
          visible ? classes.visible : classes.toRight
        }`}
      >
        {children[0]}
      </div>
      <div
        className={`${classes.postContent} ${
          visible ? classes.visible : classes.toLeft
        }`}
      >
        {children[1]}
      </div>
    </Fragment>
  ) : (
    <div
      className={`${classes.postContent} ${
        visible ? classes.visible : classes.toTop
      }`}
    >
      {children}
    </div>
  );

  return (
    <div className={classes.post}>
      <div ref={setRef} className={classes.container}>
        {content}
      </div>
    </div>
  );
}

export default Post;
