import { createStore } from 'redux';
import jerseyReducer from '../jersey/JerseyReducers';

const store = createStore(jerseyReducer);

export default store;
