import React from "react";
import Button from "./../../Button/Button";
import * as names from "./../../Button/Names";

import classes from "./ContactForm.module.css";

function ContactForm() {
  return (
    <div className={classes.container}>
      <div className={classes.formControl}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your Username"
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your Email"
        />
      </div>
      <div className={classes.formControl}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your Message"
        />
      </div>
      <div className={classes.btnBox}>
        <Button
          type="submit"
          btnStyle={names.BTN__PRIMARY__SOLID}
          btnSize={names.BTN__LARGE}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ContactForm;
