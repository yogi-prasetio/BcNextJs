import * as ActionType from "../constant/CategoryConstant";

export const GetCategoryRequest = () => ({
  type: ActionType.GET_CATEGORY_REQUEST,
});

export const GetCategorySuccess = (payload: any) => ({
  type: ActionType.GET_CATEGORY_SUCCESS,
  payload,
});

export const GetCategoryFailed = (payload: any) => ({
  type: ActionType.GET_CATEGORY_FAILED,
  payload,
});

export const AddCategoryRequest = (payload: any) => ({
  type: ActionType.ADD_CATEGORY_REQUEST,
  payload,
});

export const AddCategorySuccess = (payload: any) => ({
  type: ActionType.ADD_CATEGORY_SUCCESS,
  payload,
});

export const AddCategoryFailed = (payload: any) => ({
  type: ActionType.ADD_CATEGORY_FAILED,
  payload,
});

export const EditCategoryRequest = (payload: any) => ({
  type: ActionType.EDIT_CATEGORY_REQUEST,
  payload,
});

export const EditCategorySuccess = (payload: any) => ({
  type: ActionType.EDIT_CATEGORY_SUCCESS,
  payload,
});

export const EditCategoryFailed = (payload: any) => ({
  type: ActionType.EDIT_CATEGORY_FAILED,
  payload,
});

export const DelCategoryRequest = (payload: any) => ({
  type: ActionType.DEL_CATEGORY_REQUEST,
  payload,
});

export const DelCategorySuccess = (payload: any) => ({
  type: ActionType.DEL_CATEGORY_SUCCESS,
  payload,
});

export const DelCategoryFailed = (payload: any) => ({
  type: ActionType.DEL_CATEGORY_FAILED,
  payload,
});

export const FindCategoryRequest = (payload: any) => ({
  type: ActionType.FIND_CATEGORY_REQUEST,
  payload,
});

export const FindCategorySuccess = (payload: any) => ({
  type: ActionType.FIND_CATEGORY_SUCCESS,
  payload,
});

export const FindCategoryFailed = (payload: any) => ({
  type: ActionType.FIND_CATEGORY_FAILED,
  payload,
});
