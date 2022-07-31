import { BUY_KIT } from './KitTypes';

export const buyKit = (number = 2) => {
  return {
    type: BUY_KIT,
    payload: number,
  };
};
