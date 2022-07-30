import React from 'react';
import { connect } from 'react-redux';
import { buyKit } from '../redux/actionCreator/index';

const KitContainer = (props) => {
  return (
    <div>
      <h1>Number of kit: {props.numOfKit}</h1>
      <button onClick={props.buyKit}>Buy Kit</button>
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
    buyKit: () => dispatch(buyKit()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KitContainer);
