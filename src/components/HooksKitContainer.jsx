import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyKit } from '../redux/actionCreator/index';

const HooksKitContainer = () => {
  const numOfKit = useSelector((state) => state.kit.numOfKit); //useSelector is added to access initialState
  const dispatch = useDispatch(); // useDispatch is used for taking the action based on action type case

  return (
    <div>
      <h1>Num of kit: {numOfKit}</h1>
      <button onClick={() => dispatch(buyKit())}>Buy Kit</button>
    </div>
  );
};

export default HooksKitContainer;
