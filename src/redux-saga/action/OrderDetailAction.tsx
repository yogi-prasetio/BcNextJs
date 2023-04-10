import * as ActionType from "../constant/OrderDetailConstant";

export const GetOrdetRequest = () => ({
  type: ActionType.GET_ORDET_REQUEST,
});

export const GetOrdetSuccess = (payload: any) => ({
  type: ActionType.GET_ORDET_SUCCESS,
  payload,
});

export const GetOrdetFailed = (payload: any) => ({
  type: ActionType.GET_ORDET_FAILED,
  payload,
});

export const AddOrdetRequest = (payload: any) => ({
  type: ActionType.ADD_ORDET_REQUEST,
  payload,
});

export const AddOrdetSuccess = (payload: any) => ({
  type: ActionType.ADD_ORDET_SUCCESS,
  payload,
});

export const AddOrdetFailed = (payload: any) => ({
  type: ActionType.ADD_ORDET_FAILED,
  payload,
});

export const EditOrdetRequest = (payload: any) => ({
  type: ActionType.EDIT_ORDET_REQUEST,
  payload,
});

export const EditOrdetSuccess = (payload: any) => ({
  type: ActionType.EDIT_ORDET_SUCCESS,
  payload,
});

export const EditOrdetFailed = (payload: any) => ({
  type: ActionType.EDIT_ORDET_FAILED,
  payload,
});

export const DelOrdetRequest = (payload: any) => ({
  type: ActionType.DEL_ORDET_REQUEST,
  payload,
});

export const DelOrdetSuccess = (payload: any) => ({
  type: ActionType.DEL_ORDET_SUCCESS,
  payload,
});

export const DelOrdetFailed = (payload: any) => ({
  type: ActionType.DEL_ORDET_FAILED,
  payload,
});

export const FindOrdetRequest = (payload: any) => ({
  type: ActionType.FIND_ORDET_REQUEST,
  payload,
});

export const FindOrdetSuccess = (payload: any) => ({
  type: ActionType.FIND_ORDET_SUCCESS,
  payload,
});

export const FindOrdetFailed = (payload: any) => ({
  type: ActionType.FIND_ORDET_FAILED,
  payload,
});
