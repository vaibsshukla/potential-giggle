import {
  API_CALL_FAILURE,
  DUMMY_API_CALL,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_COUNT,
  DECREASE_COUNT,
  COUNT,
} from '../../Actions';

const initialState = {
  testResponse: '',
  cart: [],
  count: 0,
};

export function apiReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      let ct = state.count + 1;
      return {
        ...state,
        cart: [action.cart, ...state.cart],
        count: state.count + 1,
      };
    case INCREASE_COUNT: {
      let index = state.cart.findIndex(obj => obj.key === action.cart.key);
      const newArray = [...state.cart];
      let prevCount = newArray[index].count;
      newArray[index].count = prevCount + 1;
      return {
        ...state,
        cart: newArray,
        count: state.count + 1,
      };
    }
    case DECREASE_COUNT: {
      let index = state.cart.findIndex(obj => obj.key === action.cart.key);
      const newArray = [...state.cart];
      let prevCount = newArray[index].count;
      if (prevCount > 1) {
        newArray[index].count = prevCount - 1;
        return {
          ...state,
          cart: newArray,
          count: --state.count,
        };
      } else {
        return {
          ...state,
          cart: state.cart.filter(obj => obj.key != action.cart.key),
          count: --state.count,
        };
      }
    }
    case COUNT: {
      return {...state, count: action.count};
    }
    default:
      return state;
  }
}
