import { combineReducers } from 'redux';
import jerseyReducer from '../jersey/JerseyReducers';
import kitReducer from '../kit/KitReducers';

const rootReducer = combineReducers({ jersey: jerseyReducer, kit: kitReducer });

export default rootReducer;
