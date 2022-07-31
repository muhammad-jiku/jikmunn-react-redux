import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';

// importing middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// adding logger and thunk middleware
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store;
