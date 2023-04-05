import * as ActionRegion from "../constant/RegionConstant";

export const GetRegionRequest = () => ({
  type: ActionRegion.GET_DATA_REQUEST,
});

export const GetRegionSuccess = (payload: any) => ({
  type: ActionRegion.GET_DATA_SUCCESS,
  payload,
});

export const GetRegionFailed = (payload: any) => ({
  type: ActionRegion.GET_DATA_FAILED,
  payload,
});

export const AddRegionRequest = (payload: any) => ({
  type: ActionRegion.ADD_DATA_REQUEST,
  payload,
});

export const AddRegionSuccess = (payload: any) => ({
  type: ActionRegion.ADD_DATA_SUCCESS,
  payload,
});

export const AddRegionFailed = (payload: any) => ({
  type: ActionRegion.ADD_DATA_FAILED,
  payload,
});

export const UpdateRegionRequest = (payload: any) => ({
  type: ActionRegion.UPDATE_DATA_REQUEST,
  payload,
});

export const UpdateRegionSuccess = (payload: any) => ({
  type: ActionRegion.UPDATE_DATA_SUCCESS,
  payload,
});

export const UpdateRegionFailed = (payload: any) => ({
  type: ActionRegion.UPDATE_DATA_FAILED,
  payload,
});

export const DeleteRegionRequest = (payload: any) => ({
  type: ActionRegion.DELETE_DATA_REQUEST,
  payload,
});

export const DeleteRegionSuccess = (payload: any) => ({
  type: ActionRegion.DELETE_DATA_SUCCESS,
  payload,
});

export const DeleteRegionFailed = (payload: any) => ({
  type: ActionRegion.DELETE_DATA_FAILED,
  payload,
});

export const FindRegionRequest = (payload: any) => ({
  type: ActionRegion.FIND_DATA_REQUEST,
  payload,
});

export const FindRegionSuccess = (payload: any) => ({
  type: ActionRegion.FIND_DATA_SUCCESS,
  payload,
});

export const FindRegionFailed = (payload: any) => ({
  type: ActionRegion.FIND_DATA_FAILED,
  payload,
});
