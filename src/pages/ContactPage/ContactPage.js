import React, { useReducer } from "react";

import validate from "../../components/Input/validate";
import Input from "../../components/Input/Input";
import { initialState, reducer } from "../../components/Input/config";

import classes from "./ContactPage.module.css";

function ContactPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeHandler = event => {
    const { name, value } = event.target;
    const { valid, error } = validate(
      name,
      value,
      name === "confirmPassword" ? state["password"].value : null
    );
    dispatch({
      type: name,
      payload: {
        value,
        valid,
        error,
        touched: true,
      },
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    const formValues = {};
    let validationPassed = true;
    for (const item in state) {
      formValues[item] = state[item].value;
      if (state[item].required)
        validationPassed = state[item].valid && validationPassed;
      const { valid, error } = validate(
        item,
        state[item].value,
        item === "confirmPassword" ? state["password"].value : null
      );
      dispatch({
        type: item,
        payload: {
          valid,
          error,
          touched: true,
        },
      });
    }
    if (validationPassed) console.log(formValues);
  };

  return (
    <div className={classes.contact}>
      <div className={classes.container}>
        <form className={classes.form} noValidate onSubmit={submitHandler}>
          <Input
            label="نام کاربری"
            identifier="input"
            type="text"
            name="username"
            placeholder="نام کاربری خورد را وارد کنید"
            value={state.username.value}
            required={state.username.required}
            changed={changeHandler}
            error={state.username.error}
            touched={state.username.touched}
            valid={state.username.valid}
          />
          <Input
            label="ایمیل"
            identifier="input"
            type="email"
            name="email"
            placeholder="آدرس ایمیل خود را وارد کنید"
            value={state.email.value}
            required={state.email.required}
            changed={changeHandler}
            error={state.email.error}
            touched={state.email.touched}
            valid={state.email.valid}
          />
          <Input
            label="تلفن همراه"
            identifier="input"
            type="number"
            name="phoneNumber"
            placeholder=" شماره موبایل خود را وارد کنید"
            value={state.phoneNumber.value}
            required={state.phoneNumber.required}
            changed={changeHandler}
            error={state.phoneNumber.error}
            touched={state.phoneNumber.touched}
            valid={state.phoneNumber.valid}
          />
          <Input
            label="گذرواژه"
            identifier="input"
            type="password"
            name="password"
            placeholder="گذرواژه خود را وارد کنید"
            value={state.password.value}
            required={state.password.required}
            changed={changeHandler}
            error={state.password.error}
            touched={state.password.touched}
            valid={state.password.valid}
          />
          <Input
            label="تکرار گذرواژه"
            identifier="input"
            type="password"
            name="confirmPassword"
            placeholder="گذرواژه خود را تکرار کنید"
            value={state.confirmPassword.value}
            required={state.confirmPassword.required}
            changed={changeHandler}
            error={state.confirmPassword.error}
            touched={state.confirmPassword.touched}
            valid={state.confirmPassword.valid}
          />
          <Input
            label="کد ملی"
            identifier="input"
            type="number"
            name="idNumber"
            placeholder="شماره ملی خود را وارد کنید"
            value={state.idNumber.value}
            required={state.idNumber.required}
            changed={changeHandler}
            error={state.idNumber.error}
            touched={state.idNumber.touched}
            valid={state.idNumber.valid}
          />
          <Input
            identifier="select"
            name="selectCity"
            required={state.selectCity.required}
            value={state.selectCity.value}
            label="شهر"
            changed={changeHandler}
            error={state.selectCity.error}
            touched={state.selectCity.touched}
            valid={state.selectCity.valid}
          >
            {[
              { value: "tehran", text: "تهران" },
              { value: "shiraz", text: "شیراز" },
            ]}
          </Input>
          <div className={classes.genderContainer}>
            <div>
              <p>جنسیت</p>
              <Input
                identifier="input"
                type="radio"
                name="gender"
                value="male"
                label="مرد"
                required={state.gender.required}
                changed={changeHandler}
              />
              <Input
                identifier="input"
                type="radio"
                name="gender"
                value="female"
                label="زن"
                required={state.gender.required}
                changed={changeHandler}
              />
            </div>
            <span className={classes.redioError}>
              {state.gender.error && state.gender.error}
            </span>
          </div>
          <Input
            className={classes.submitBtn}
            identifier="button"
            type="submit"
            name="submit"
          >
            ثبت
          </Input>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
