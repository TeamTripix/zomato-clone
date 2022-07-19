import { addtoCart, addTotalPrice, alert } from "../reducer/reducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  addtoCart,
  addTotalPrice,
  alert,
});

export default rootReducer;
