import { combineReducers } from "redux";
import RegionReduce from "./RegionReducer";
import ProductReduce from "./ProductReducer";
import UserReduce from "./UserReducer";
import CustomerReduce from "./CustomerReducer";
import CategoryReduce from "./CategoryReducer";
import OrderReduce from "./OrderReducer";
import OrderDetailReduce from "./OrderDetailReducer";

const rootReducer = combineReducers({
  regionState: RegionReduce,
  productState: ProductReduce,
  userState: UserReduce,
  customerState: CustomerReduce,
  categoryState: CategoryReduce,
  orderState: OrderReduce,
  ordetState: OrderDetailReduce,
});

export default rootReducer;
