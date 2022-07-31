import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyKit } from '../redux/actionCreator/index';

const NewKitContainer = (props) => {
  const [numberOfKit, setNumberOfKit] = useState(2);
  return (
    <div>
      <h1>Number of kit: {props.numOfKit}</h1>
      <input
        type="text"
        value={numberOfKit}
        onChange={(e) => setNumberOfKit(e.target.value)}
      />
      <button onClick={() => props.buyKit(numberOfKit)}>
        Buy {numberOfKit} Kit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfKit: state.kit.numOfKit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyKit: (numberOfKit) => dispatch(buyKit(numberOfKit)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewKitContainer);
