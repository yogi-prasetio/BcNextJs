import * as ActionType from "../constant/RegionConstant";

const init_state = {
  regions: [],
  region: [],
};

const RegionReduce = (state = init_state, action: any) => {
  switch (action.type) {
    case ActionType.GET_DATA_REQUEST:
      return { ...state };
    case ActionType.GET_DATA_SUCCESS:
      return GetRegion(state, action);
    case ActionType.ADD_DATA_REQUEST:
      return { ...state };
    case ActionType.ADD_DATA_SUCCESS:
      return AddRegion(state, action);
    case ActionType.UPDATE_DATA_REQUEST:
      return { ...state };
    case ActionType.UPDATE_DATA_SUCCESS:
      return UpdateRegion(state, action);
    case ActionType.DELETE_DATA_REQUEST:
      return { ...state };
    case ActionType.DELETE_DATA_SUCCESS:
      return DeleteRegion(state, action);
    case ActionType.FIND_DATA_REQUEST:
      return { ...state };
    case ActionType.FIND_DATA_SUCCESS:
      return FindRegion(state, action);
    default:
      return { ...state };
  }
};

const GetRegion = (state: any, action: any) => {
  return {
    ...state,
    regions: action.payload,
  };
};

const AddRegion = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    regions: [...state.regions, payload],
  };
};

const UpdateRegion = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DeleteRegion = (state: any, action: any) => {
  return {
    ...state,
  };
};

const FindRegion = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    region: payload,
  };
};

export default RegionReduce;
