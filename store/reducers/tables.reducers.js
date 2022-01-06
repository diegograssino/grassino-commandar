import { SELECT_TABLE } from '../actions/tables.action';

const initialState = {
  tables: [
    { id: '1', title: 'Mesa 1' },
    { id: '2', title: 'Mesa 2' },
    { id: '3', title: 'Mesa 3' },
    { id: '4', title: 'Mesa 4' },
  ],
  selectedTable: null,
};

function TablesReducer(state = initialState, action = '') {
  switch (action.type) {
    case SELECT_TABLE:
      return { ...state, selected: action.tableID };

    default:
      return state;
  }
}

export default TablesReducer;
