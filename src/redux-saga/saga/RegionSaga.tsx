import { call, put } from "redux-saga/effects";
import Region from "@/pages/api/Region";

import {
  GetRegionSuccess,
  GetRegionFailed,
  AddRegionSuccess,
  AddRegionFailed,
  UpdateRegionSuccess,
  UpdateRegionFailed,
  DeleteRegionSuccess,
  DeleteRegionFailed,
  FindRegionSuccess,
  FindRegionFailed,
} from "../action/RegionAction";

function* handleGetRegion(): any {
  try {
    const result = yield call(Region.Read);
    yield put(GetRegionSuccess(result));
  } catch (error) {
    yield put(GetRegionFailed(error));
  }
}

function* handleAddRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.Create, payload);
    yield put(AddRegionSuccess(result.data));
  } catch (error) {
    yield put(AddRegionFailed(error));
  }
}

function* handleUpdateRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.Update, payload);
    yield put(UpdateRegionSuccess(result.data));
  } catch (error) {
    yield put(UpdateRegionFailed(error));
  }
}

function* handleDeleteRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.Delete, payload);
    yield put(DeleteRegionSuccess(result.data));
  } catch (error) {
    yield put(DeleteRegionFailed(error));
  }
}

function* handleFindRegion(action: any): any {
  const { payload } = action;
  try {
    const result = yield call(Region.findData, payload);
    yield put(FindRegionSuccess(result.data));
  } catch (error) {
    yield put(FindRegionFailed(error));
  }
}

export {
  handleGetRegion,
  handleAddRegion,
  handleUpdateRegion,
  handleDeleteRegion,
  handleFindRegion,
};
