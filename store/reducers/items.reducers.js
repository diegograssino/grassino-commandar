import { SELECT_ITEM } from '../actions/items.action';

const initialState = {
  items: [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
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
