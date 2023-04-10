import * as ActionType from "../constant/UserConstant";
import { getCookie } from "cookies-next";

// const getFromStorage = (key: any) => {
//   if (!key || typeof window === "undefined") {
//     return "";
//   }
//   return sessionStorage.getItem(key);
// };

const getFromCookies = (key: any) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return getCookie(key);
};

const INIT_STATE = {
  // SESSION STORAGE
  //   userProfile: getFromStorage("profile")
  //     ? JSON.parse(sessionStorage.getItem(profile))
  //     : null,
  // userSignup: {},
  // message: "",

  // COOKIE
  userProfile: getFromCookies("profile")
    ? JSON.parse(getCookie("profile"))
    : null,
  userSignup: null,
};

const UserReducer = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.SIGNIN_REQUEST:
      return state;
    case ActionType.SIGNIN_SUCCESS:
      return SigninSuccess(state, action);
    case ActionType.SIGNUP_REQUEST:
      return state;
    case ActionType.SIGNUP_SUCCESS:
      return SignupSuccess(state, action);
    case ActionType.SIGNOUT_REQUEST:
      return state;
    case ActionType.SIGNOUT_SUCCESS:
      return SignoutSuccess(state, action);
    case ActionType.MESSAGE_NOTIFICATION:
      return ShowMessage(state, action);
    default:
      return state;
  }
};

const SigninSuccess = (state: any, action: any) => {
  return {
    ...state,
    userProfile: action.payload,
    message: "Sign in success",
  };
};

const SignupSuccess = (state: any, action: any) => {
  return {
    ...state,
    userSignup: action.payload,
  };
};

const SignoutSuccess = (state: any, action: any) => {
  return {
    ...state,
    userProfile: {},
    message: "Sign up success",
  };
};

const ShowMessage = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    message: payload.message,
  };
};

export default UserReducer;
