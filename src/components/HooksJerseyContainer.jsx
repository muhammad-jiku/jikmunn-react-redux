import React from 'react';
import { useSelector } from 'react-redux';

const HooksJerseyContainer = () => {
  const numOfJersey = useSelector((state) => state.numOfJersey); //useSelector is added to access initialState
  return (
    <div>
      <h1>Num of jersey: {numOfJersey}</h1>
      <button>Buy Jersey</button>
    </div>
  );
};

export default HooksJerseyContainer;
