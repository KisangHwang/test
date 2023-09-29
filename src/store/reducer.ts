import {combineReducers} from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';
import checkSlice from './features/checkSlice';

const combinedReducer = combineReducers({
  products: productSlice,
  carts: cartSlice,
  check: checkSlice
});

const rootReducer: typeof combinedReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload
    }
    return nextState;
  } else {
    return combinedReducer(state, action)
  }
}
export default rootReducer;