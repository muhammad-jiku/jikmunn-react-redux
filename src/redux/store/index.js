import { createStore } from 'redux';
import jerseyReducer from '../jersey/JerseyReducers';

const store = createStore(jerseyReducer);
console.log(store, jerseyReducer);

export default store;
