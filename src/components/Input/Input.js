import React from "react";

import classes from "./../../pages/ContactPage/ContactPage.module.css";

function Input({
  children,
  identifier,
  type,
  placeholder,
  name,
  label,
  value,
  autoFocus,
  changed,
  required,
  error,
  touched,
  valid,
}) {
  let classname;
  if (touched && valid) {
    classname = classes.success;
  } else if (touched && !valid) {
    classname = classes.error;
  }

  const changeHandler = event => {
    changed(event);
  };

  switch (identifier) {
    case "input":
      return (
        <div className={classname}>
          <label>{label ? label : name[0].toUpperCase() + name.slice(1)}</label>
          <input
            autoFocus={autoFocus}
            formNoValidate={type === "email"}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={changeHandler}
          />
          <span>{error && error}</span>
        </div>
      );
    case "textarea":
      return (
        <div className={classname}>
          <label>{label ? label : name[0].toUpperCase() + name.slice(1)}</label>
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={changeHandler}
          ></textarea>
          <span>{error && error}</span>
        </div>
      );
    case "button":
      return (
        <div>
          <button type={type} name={name}>
            {children}
          </button>
        </div>
      );
    case "select":
      return (
        <div className={classname}>
          <label>{label ? label : name[0].toUpperCase() + name.slice(1)}</label>
          <select
            name={name}
            value={value}
            required={required}
            onChange={changeHandler}
          >
            <option value="not choosed">انتخاب شهر</option>
            {children.map(item => (
              <option key={item.value} value={item.value}>
                {item.text}
              </option>
            ))}
          </select>
          <span>{error && error}</span>
        </div>
      );
    default:
      return <input />;
  }
}

export default Input;
