import { createStore, combineReducers } from "redux";

import filters from './reducers/filters'
import devices from './reducers/devices'
import categories from './reducers/categories'
import cart from './reducers/cart'

const rootReducer = combineReducers({
    filters,
    devices,
    categories,
    cart
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store