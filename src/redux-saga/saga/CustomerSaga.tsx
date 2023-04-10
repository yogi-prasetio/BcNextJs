import { call, put } from "redux-saga/effects";
import {
  GetCustomerSuccess,
  GetCustomerFailed,
  AddCustomerSuccess,
  AddCustomerFailed,
  FindCustomerSuccess,
  FindCustomerFailed,
  EditCustomerSuccess,
  EditCustomerFailed,
  DelCustomerSuccess,
  DelCustomerFailed,
} from "../action/CustomerAction";
import CustomerApi from "@/pages/api/Customer";

function* handleCustomer(): any {
  try {
    const result = yield call(CustomerApi.read);
    yield put(GetCustomerSuccess(result));
  } catch (error) {
    yield put(GetCustomerFailed(error));
  }
}
function* createCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.create, payload);
    yield put(AddCustomerSuccess(result.data));
  } catch (error) {
    yield put(AddCustomerFailed(error));
  }
}
function* FindCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.getOne, payload);
    yield put(FindCustomerSuccess(result));
  } catch (error) {
    yield put(FindCustomerFailed(error));
  }
}
function* EditCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.update, payload);
    yield put(EditCustomerSuccess(result.data));
  } catch (error) {
    yield put(EditCustomerFailed(error));
  }
}

function* DeleteCustomer(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CustomerApi.deleted, payload);
    yield put(DelCustomerSuccess(result.data));
  } catch (error) {
    yield put(DelCustomerFailed(error));
  }
}

export {
  handleCustomer,
  createCustomer,
  FindCustomer,
  EditCustomer,
  DeleteCustomer,
};
