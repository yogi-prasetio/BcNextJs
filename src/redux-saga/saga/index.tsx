import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeRegion from "../constant/RegionConstant";
import * as ActionProduct from "../constant/ProductConstant";
import * as ActionUser from "../constant/UserConstant";

import {
  handleAddRegion,
  handleDeleteRegion,
  handleFindRegion,
  handleGetRegion,
  handleUpdateRegion,
} from "./RegionSaga";
import {
  handleProduct,
  createProduct,
  FindProduct,
  EditProduct,
  DeleteProduct,
} from "./ProductSaga";
import { handleSignin, handleSignup, handleSignout } from "./UserSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_DATA_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.ADD_DATA_REQUEST, handleAddRegion),
    takeEvery(ActionTypeRegion.UPDATE_DATA_REQUEST, handleUpdateRegion),
    takeEvery(ActionTypeRegion.DELETE_DATA_REQUEST, handleDeleteRegion),
    takeEvery(ActionTypeRegion.FIND_DATA_REQUEST, handleFindRegion),

    takeEvery(ActionProduct.GET_PRODUCT_REQUEST, handleProduct),
    takeEvery(ActionProduct.ADD_PRODUCT_REQUEST, createProduct),
    takeEvery(ActionProduct.FIND_PRODUCT_REQUEST, FindProduct),
    takeEvery(ActionProduct.EDIT_PRODUCT_REQUEST, EditProduct),
    takeEvery(ActionProduct.DEL_PRODUCT_REQUEST, DeleteProduct),

    takeEvery(ActionUser.SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionUser.SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionUser.SIGNOUT_REQUEST, handleSignout),
  ]);
}

export default watchAll;
