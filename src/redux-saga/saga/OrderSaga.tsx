import { call, put } from "redux-saga/effects";
import {
  GetOrderSuccess,
  GetOrderFailed,
  AddOrderSuccess,
  AddOrderFailed,
  FindOrderSuccess,
  FindOrderFailed,
  EditOrderSuccess,
  EditOrderFailed,
  DelOrderSuccess,
  DelOrderFailed,
} from "../action/OrderAction";
import OrderApi from "@/pages/api/Order";

function* handleOrder(): any {
  try {
    const result = yield call(OrderApi.read);
    yield put(GetOrderSuccess(result));
  } catch (error) {
    yield put(GetOrderFailed(error));
  }
}
function* createOrder(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderApi.create, payload);
    yield put(AddOrderSuccess(result.data));
  } catch (error) {
    yield put(AddOrderFailed(error));
  }
}
function* FindOrder(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderApi.getOne, payload);
    yield put(FindOrderSuccess(result));
  } catch (error) {
    yield put(FindOrderFailed(error));
  }
}
function* EditOrder(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderApi.update, payload);
    yield put(EditOrderSuccess(result.data));
  } catch (error) {
    yield put(EditOrderFailed(error));
  }
}

function* DeleteOrder(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrderApi.deleted, payload);
    yield put(DelOrderSuccess(result.data));
  } catch (error) {
    yield put(DelOrderFailed(error));
  }
}

export {
  handleOrder,
  createOrder,
  FindOrder,
  EditOrder,
  DeleteOrder,
};
