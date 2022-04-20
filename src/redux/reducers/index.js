import { combineReducers } from "redux";

import { productReducer, selectProductReducer } from "./product.reducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectProductReducer,
})

export default reducers