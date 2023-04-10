import { call, put } from "redux-saga/effects";
import {
  GetCategorySuccess,
  GetCategoryFailed,
  AddCategorySuccess,
  AddCategoryFailed,
  FindCategorySuccess,
  FindCategoryFailed,
  EditCategorySuccess,
  EditCategoryFailed,
  DelCategorySuccess,
  DelCategoryFailed,
} from "../action/CategoryAction";
import CategoryApi from "@/pages/api/Category";

function* handleCategory(): any {
  try {
    const result = yield call(CategoryApi.read);
    yield put(GetCategorySuccess(result));
  } catch (error) {
    yield put(GetCategoryFailed(error));
  }
}
function* createCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CategoryApi.create, payload);
    yield put(AddCategorySuccess(result.data));
  } catch (error) {
    yield put(AddCategoryFailed(error));
  }
}
function* FindCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CategoryApi.getOne, payload);
    yield put(FindCategorySuccess(result));
  } catch (error) {
    yield put(FindCategoryFailed(error));
  }
}
function* EditCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CategoryApi.update, payload);
    yield put(EditCategorySuccess(result.data));
  } catch (error) {
    yield put(EditCategoryFailed(error));
  }
}

function* DeleteCategory(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(CategoryApi.deleted, payload);
    yield put(DelCategorySuccess(result.data));
  } catch (error) {
    yield put(DelCategoryFailed(error));
  }
}

export {
  handleCategory,
  createCategory,
  FindCategory,
  EditCategory,
  DeleteCategory,
};
