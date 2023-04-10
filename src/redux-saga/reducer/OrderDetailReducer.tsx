import * as ActionType from "../constant/OrderDetailConstant";

const INIT_STATE = {
  order_details: [],
  order_detail: [],
};

const OrdetReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_ORDET_REQUEST:
      return { ...state };
    case ActionType.GET_ORDET_SUCCESS:
      return GetOrdetSuccessfully(state, action);
    case ActionType.ADD_ORDET_REQUEST:
      return { ...state };
    case ActionType.ADD_ORDET_SUCCESS:
      return AddOrdetSuccessfully(state, action);
    case ActionType.FIND_ORDET_REQUEST:
      return { ...state };
    case ActionType.FIND_ORDET_SUCCESS:
      return FindOrdetSuccessfully(state, action);
    case ActionType.EDIT_ORDET_REQUEST:
      return { ...state };
    case ActionType.EDIT_ORDET_SUCCESS:
      return EditOrdetSuccessfully(state, action);
    case ActionType.DEL_ORDET_REQUEST:
      return { ...state };
    case ActionType.DEL_ORDET_SUCCESS:
      return DelOrdetSuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetOrdetSuccessfully = (state: any, action: any) => {
  return {
    ...state,
    order_details: action.payload,
  };
};

const AddOrdetSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    order_details: [...state.order_details, payload],
  };
};

const FindOrdetSuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    order_detail: payload,
  };
};

const EditOrdetSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelOrdetSuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default OrdetReduce;
