import { BUY_KIT } from './KitTypes';

const initialState = {
  numOfKit: 20,
};

const kitReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case BUY_KIT:
      return {
        ...state,
        numOfKit: state.numOfKit - action.payload,
      };
    default:
      return state;
  }
};

export default kitReducer;
