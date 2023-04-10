import * as ActionUser from "../constant/UserConstant";

export const doSignupRequest = (payload: any) => ({
  type: ActionUser.SIGNUP_REQUEST,
  payload,
});

export const doSignupSuccess = (payload: any) => ({
  type: ActionUser.SIGNUP_SUCCESS,
  payload,
});

export const doSigninRequest = (payload: any) => ({
  type: ActionUser.SIGNIN_REQUEST,
  payload,
});

export const doSigninSuccess = (payload: any) => ({
  type: ActionUser.SIGNIN_SUCCESS,
  payload,
});

export const doSignoutRequest = () => ({
  type: ActionUser.SIGNOUT_REQUEST
});

export const doSignoutSuccess = (payload: any) => ({
  type: ActionUser.SIGNOUT_SUCCESS,
  payload,
});

export const doMessageNotif = (payload: any) => ({
  type: ActionUser.MESSAGE_NOTIFICATION,
  payload,
});
