// import { SELECT_ITEM } from '../actions/order.action';

// const initialState = {
//   items: [],
//   selectedItem: null,
// };

// const OrderReducer = (state = initialState, action = '') => {
//   switch (action.type) {
//     case SELECT_ITEM:
//       return { ...state, selected: action.itemID };

//     default:
//       return state;
//   }
//   // return state;
// };

// export default OrderReducer;

import ORDER from '../../data/order';
import { CONFIRM_ORDER } from '../actions/order.action';

const INITIAL_STATE = {
  items: ORDER,
  total: 27000,
  status: null,
  orderID: null,
};

const OrderReducer = (state = INITIAL_STATE, action = '') => {
  switch (action.type) {
    case CONFIRM_ORDER:
      return {
        ...state,
        status: action.status,
        orderID: action.orderID,
      };
    default:
      return state;
  }
};

export default OrderReducer;
