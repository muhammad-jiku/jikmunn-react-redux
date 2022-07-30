import { BUY_JERSEY } from './JerseyTypes';

const initialState = {
  numOfJersy: 10,
};

const jerseyReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case BUY_JERSEY:
      return {
        ...state,
        numOfJersy: state.numOfJersy - 1,
      };
    default:
      return state;
  }
};

export default jerseyReducer;
