import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import TablesReducer from './reducers/tables.reducers';
import ItemsReducer from './reducers/items.reducers';
import OrderReducer from './reducers/order.reducers';

const RootReducer = combineReducers({
  tables: TablesReducer,
  items: ItemsReducer,
  order: OrderReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
