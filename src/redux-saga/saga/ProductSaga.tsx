import { call, put } from "redux-saga/effects";
import {
  GetProductSuccess,
  GetProductFailed,
  AddProductSuccess,
  AddProductFailed,
  FindProductSuccess,
  FindProductFailed,
  EditProductSuccess,
  EditProductFailed,
  DelProductSuccess,
  DelProductFailed,
} from "../action/ProductAction";
import ProductApi from "@/pages/api/Product";

function* handleProduct(): any {
  try {
    const result = yield call(ProductApi.read);
    yield put(GetProductSuccess(result));
  } catch (error) {
    yield put(GetProductFailed(error));
  }
}
function* createProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductApi.create, payload);
    yield put(AddProductSuccess(result.data));
  } catch (error) {
    yield put(AddProductFailed(error));
  }
}
function* FindProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductApi.getOne, payload);
    yield put(FindProductSuccess(result));
  } catch (error) {
    yield put(FindProductFailed(error));
  }
}
function* EditProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductApi.update, payload);
    yield put(EditProductSuccess(result.data));
  } catch (error) {
    yield put(EditProductFailed(error));
  }
}

function* DeleteProduct(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(ProductApi.deleted, payload);
    yield put(DelProductSuccess(result.data));
  } catch (error) {
    yield put(DelProductFailed(error));
  }
}

export {
  handleProduct,
  createProduct,
  FindProduct,
  EditProduct,
  DeleteProduct,
};
