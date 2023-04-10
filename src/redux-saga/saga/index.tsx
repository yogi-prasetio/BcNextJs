import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeRegion from "../constant/RegionConstant";
import * as ActionProduct from "../constant/ProductConstant";
import * as ActionUser from "../constant/UserConstant";
import * as ActionCustomer from "../constant/CustomerConstant";
import * as ActionCategory from "../constant/CategoryConstant";
import * as ActionOrder from "../constant/OrderConstant";
import * as ActionOrdet from "../constant/OrderDetailConstant";

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

import {
  handleCustomer,
  createCustomer,
  DeleteCustomer,
  FindCustomer,
  EditCustomer,
} from "./CustomerSaga";

import {
  handleCategory,
  createCategory,
  DeleteCategory,  
  FindCategory,
  EditCategory,
} from "./CategorySaga";

import {
  handleOrder,
  createOrder,
  DeleteOrder,
  FindOrder,
  EditOrder,
} from "./OrderSaga";

import {
  handleOrdet,
  createOrdet,
  DeleteOrdet,
  FindOrdet,
  EditOrdet,
} from "./OrderDetailSaga";

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

    takeEvery(ActionCustomer.GET_CUSTOMER_REQUEST, handleCustomer),
    takeEvery(ActionCustomer.ADD_CUSTOMER_REQUEST, createCustomer),
    takeEvery(ActionCustomer.FIND_CUSTOMER_REQUEST, FindCustomer),
    takeEvery(ActionCustomer.EDIT_CUSTOMER_REQUEST, EditCustomer),
    takeEvery(ActionCustomer.DEL_CUSTOMER_REQUEST, DeleteCustomer),

    takeEvery(ActionCategory.GET_CATEGORY_REQUEST, handleCategory),
    takeEvery(ActionCategory.ADD_CATEGORY_REQUEST, createCategory),
    takeEvery(ActionCategory.FIND_CATEGORY_REQUEST, FindCategory),
    takeEvery(ActionCategory.EDIT_CATEGORY_REQUEST, EditCategory),
    takeEvery(ActionCategory.DEL_CATEGORY_REQUEST, DeleteCategory),

    takeEvery(ActionOrder.GET_ORDER_REQUEST, handleOrder),
    takeEvery(ActionOrder.ADD_ORDER_REQUEST, createOrder),
    takeEvery(ActionOrder.FIND_ORDER_REQUEST, FindOrder),
    takeEvery(ActionOrder.EDIT_ORDER_REQUEST, EditOrder),
    takeEvery(ActionOrder.DEL_ORDER_REQUEST, DeleteOrder),

    takeEvery(ActionOrdet.GET_ORDET_REQUEST, handleOrdet),
    takeEvery(ActionOrdet.ADD_ORDET_REQUEST, createOrdet),
    takeEvery(ActionOrdet.FIND_ORDET_REQUEST, FindOrdet),
    takeEvery(ActionOrdet.EDIT_ORDET_REQUEST, EditOrdet),
    takeEvery(ActionOrdet.DEL_ORDET_REQUEST, DeleteOrdet),
  ]);
}

export default watchAll;
