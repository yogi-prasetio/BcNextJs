import { call, put } from "redux-saga/effects";
import {
  GetOrdetSuccess,
  GetOrdetFailed,
  AddOrdetSuccess,
  AddOrdetFailed,
  FindOrdetSuccess,
  FindOrdetFailed,
  EditOrdetSuccess,
  EditOrdetFailed,
  DelOrdetSuccess,
  DelOrdetFailed,
} from "../action/OrderDetailAction";
import OrdetApi from "@/pages/api/OrderDetail";

function* handleOrdet(): any {
  try {
    const result = yield call(OrdetApi.read);
    yield put(GetOrdetSuccess(result));
  } catch (error) {
    yield put(GetOrdetFailed(error));
  }
}
function* createOrdet(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrdetApi.create, payload);
    yield put(AddOrdetSuccess(result.data));
  } catch (error) {
    yield put(AddOrdetFailed(error));
  }
}
function* FindOrdet(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrdetApi.getOne, payload);
    yield put(FindOrdetSuccess(result));
  } catch (error) {
    yield put(FindOrdetFailed(error));
  }
}
function* EditOrdet(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrdetApi.update, payload);
    yield put(EditOrdetSuccess(result.data));
  } catch (error) {
    yield put(EditOrdetFailed(error));
  }
}

function* DeleteOrdet(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(OrdetApi.deleted, payload);
    yield put(DelOrdetSuccess(result.data));
  } catch (error) {
    yield put(DelOrdetFailed(error));
  }
}

export {
  handleOrdet,
  createOrdet,
  FindOrdet,
  EditOrdet,
  DeleteOrdet,
};
