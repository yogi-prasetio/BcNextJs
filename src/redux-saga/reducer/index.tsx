import { combineReducers } from "redux";
import RegionReduce from "./RegionReducer";
import ProductReduce from "./ProductReducer";
import UserReduce from "./UserReducer";

const rootReducer = combineReducers({
  regionState: RegionReduce,
  productState: ProductReduce,
  userState: UserReduce,
});

export default rootReducer;
