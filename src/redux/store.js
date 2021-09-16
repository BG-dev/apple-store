import { createStore, combineReducers } from "redux";

import filters from './reducers/filters'
import devices from './reducers/devices'

const rootReducer = combineReducers({
    filters,
    devices
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store