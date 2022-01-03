// export default (state = initialState, { type, payload }) => {
//   switch (type) {
//     case typeName:
//       return { ...state, ...payload };

//     default:
//       return state;
//   }
// };
import { SELECT_ITEM } from '../actions/items.action';

const initialState = {
  items: [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
  ],
  selectedItem: null,
};

const ItemsReducer = (state = initialState, action = '') => {
  switch (action.type) {
    case SELECT_ITEM:
      return { ...state, selected: action.itemID };

    default:
      return state;
  }
  // return state;
};

export default ItemsReducer;
