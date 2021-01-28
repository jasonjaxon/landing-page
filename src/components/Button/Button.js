import React from "react";
import * as names from "./Names";
import "./Button.css";

const STYLES = [
  names.BTN__PRIMARY__SOLID,
  names.BTN__WARNING__SOLID,
  names.BTN__DANGER__SOLID,
  names.BTN__SUCCESS__SOLID,
  names.BTN__PRIMARY__OUTLINE,
  names.BTN__WARNING__OUTLINE,
  names.BTN__DANGER__OUTLINE,
  names.BTN__SUCCESS__OUTLINE,
];

const SIZES = [names.BTN__SMALL, names.BTN__MEDIUM, names.BTN__LARGE];

function Button({ children, type, btnStyle, btnSize, onClick }) {
  const buttonStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const buttonSize = SIZES.includes(btnSize) ? btnSize : STYLES[1];
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${buttonStyle} ${buttonSize}`}
    >
      {children}
    </button>
  );
}

export default Button;
