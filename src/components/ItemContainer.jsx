import React from 'react';
import { connect } from 'react-redux';
import { buyJersey, buyKit } from '../redux/actionCreator';

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item: {props.item} </h2>
      <button onClick={props.buyItem}>Buy Item </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.jersey
    ? state.jersey.numOfJersey
    : state.kit.numOfKit;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.jersey
    ? () => dispatch(buyJersey())
    : () => dispatch(buyKit());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(
  // null, // it is added when you don't want to send props but wants to dispatch
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer);
