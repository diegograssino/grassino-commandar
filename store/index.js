import { createStore, combineReducers } from 'redux';
import TablesReducer from './reducers/tables.reducers';
import ItemsReducer from './reducers/items.reducers';

const RootReducer = combineReducers({
  tables: TablesReducer,
  items: ItemsReducer,
});

export default createStore(RootReducer);
