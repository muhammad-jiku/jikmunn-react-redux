import { combineReducers } from 'redux';
import jerseyReducer from '../jersey/JerseyReducers';
import kitReducer from '../kit/KitReducers';
import usersReducer from '../users/UsersReducers';

const rootReducer = combineReducers({
  jersey: jerseyReducer,
  kit: kitReducer,
  users: usersReducer,
});

export default rootReducer;
