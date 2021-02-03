export const initialState = {
  username: {
    value: "",
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  email: {
    value: "",
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  password: {
    value: "",
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  confirmPassword: {
    value: "",
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  idNumber: {
    value: "",
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  phoneNumber: {
    value: "",
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  selectCity: {
    value: "not choosed",
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
  gender: {
    value: "",
    error: null,
    valid: false,
    touched: false,
    required: true,
  },
};

export function reducer(state, action) {
  return {
    ...state,
    [action.type]: {
      ...state[action.type],
      ...action.payload,
    },
  };
}
