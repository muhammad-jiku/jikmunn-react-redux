import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyJersey } from '../redux/actionCreator/index';

const HooksJerseyContainer = () => {
  const numOfJersey = useSelector((state) => state.jersey.numOfJersey); //useSelector is added to access initialState
  const dispatch = useDispatch(); // useDispatch is used for taking the action based on action type case

  return (
    <div>
      <h1>Num of jersey: {numOfJersey}</h1>
      <button onClick={() => dispatch(buyJersey())}>Buy Jersey</button>
    </div>
  );
};

export default HooksJerseyContainer;
