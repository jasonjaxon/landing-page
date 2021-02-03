const username = value => {
  const usernameRegex = /^[a-zA-Z0-9_]{5,20}[a-zA-Z]+[0-9]*$/;

  if (!value.trim()) {
    return {
      valid: false,
      error: "نام کاربری الزامی است",
    };
  } else if (usernameRegex.test(value)) {
    return {
      valid: true,
      error: null,
    };
  } else {
    return {
      valid: false,
      error: "نام کاربری قابل قبول نیست",
    };
  }
};
const password = value => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  if (!value.trim()) {
    return {
      valid: false,
      error: "گذرواژه الزامی است",
    };
  } else if (passwordRegex.test(value)) {
    return {
      valid: true,
      error: null,
    };
  } else {
    return {
      valid: false,
      error: "گذرواژه قابل قبول نیست",
    };
  }
};

const confirmPassword = (value, value2) => {
  if (value === "") {
    return {
      valid: false,
      error: "تکرار گذرواژه الزامی است",
    };
  }
  if (value === value2) {
    return {
      valid: true,
      error: null,
    };
  } else {
    return {
      valid: false,
      error: "گذرواژه‌ها یکی نیستند",
    };
  }
};
const email = value => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!value.trim()) {
    return {
      valid: false,
      error: "ایمیل الزامی است",
    };
  } else if (emailRegex.test(value)) {
    return {
      valid: true,
      error: null,
    };
  } else {
    return {
      valid: false,
      error: "ایمیل قابل قبول نیست",
    };
  }
};

const phoneNumber = value => {
  const phoneNumberRegex_1 = /^(|0)?9\d{9}$/;
  const phoneNumberRegex_2 = /^(\+98|0098|98)?9\d{9}$/;

  if (value.length === 0) {
    return {
      valid: false,
      error: "شماره موبایل الزانی است",
    };
  }
  if (value.startsWith("98") || value.startsWith("0098")) {
    if (phoneNumberRegex_2.test(value) && value.length > 10) {
      return {
        valid: true,
        error: null,
      };
    } else {
      return {
        valid: false,
        error: "شماره موبایل قابل قبول نیست",
      };
    }
  } else {
    if (phoneNumberRegex_1.test(value)) {
      return {
        valid: true,
        error: null,
      };
    } else {
      return {
        valid: false,
        error: "شماره موبایل قابل قبول نیست",
      };
    }
  }
};

const idNumber = value => {
  let val;
  if (value.length >= 8) {
    val = ("0000" + value).substr(value.length + 4 - 10);
  } else {
    val = value;
  }
  if (val.length === 0) {
    return {
      valid: false,
      error: "کد ملی الزامی است",
    };
  } else if (val.length === 10) {
    if (
      val === "1111111111" ||
      val === "0000000000" ||
      val === "2222222222" ||
      val === "3333333333" ||
      val === "4444444444" ||
      val === "5555555555" ||
      val === "6666666666" ||
      val === "7777777777" ||
      val === "8888888888" ||
      val === "9999999999"
    ) {
      return {
        valid: false,
        error: "کد ملی اشتباه است",
      };
    }
    const c = parseInt(val.charAt(9));
    const n =
      parseInt(val.charAt(0)) * 10 +
      parseInt(val.charAt(1)) * 9 +
      parseInt(val.charAt(2)) * 8 +
      parseInt(val.charAt(3)) * 7 +
      parseInt(val.charAt(4)) * 6 +
      parseInt(val.charAt(5)) * 5 +
      parseInt(val.charAt(6)) * 4 +
      parseInt(val.charAt(7)) * 3 +
      parseInt(val.charAt(8)) * 2;
    const r = n - parseInt(n / 11) * 11;
    if (
      (r === 0 && r === c) ||
      (r === 1 && c === 1) ||
      (r > 1 && c === 11 - r)
    ) {
      return {
        valid: true,
        error: null,
      };
    } else {
      return {
        valid: false,
        error: "کد ملی اشتباه است",
      };
    }
  } else {
    return {
      valid: false,
      error: "کد ملی اشتباه است",
    };
  }
};

const selectCity = value => {
  if (value === "not choosed" || value === "") {
    return {
      valid: false,
      error: "شهر خود را انتخاب کنید",
    };
  } else {
    return {
      valid: true,
      error: null,
    };
  }
};

const gender = value => {
  if (value === "male" || value === "female") {
    return {
      valid: true,
      error: null,
    };
  } else {
    return {
      valid: false,
      error: "جنسیت را انتخاب کنید",
    };
  }
};

const validate = (name, value, value2) => {
  switch (name) {
    case "username":
      return username(value);
    case "password":
      return password(value);
    case "email":
      return email(value);
    case "idNumber":
      return idNumber(value);
    case "phoneNumber":
      return phoneNumber(value);
    case "confirmPassword":
      return confirmPassword(value, value2);
    case "selectCity":
      return selectCity(value);
    case "gender":
      return gender(value);
    default:
      return {
        valid: true,
        error: null,
      };
  }
};

export default validate;
