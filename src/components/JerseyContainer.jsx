import React from 'react';
import { connect } from 'react-redux';
import { buyJersey } from '../redux/actionCreator/index';

const JerseyContainer = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Number of jersey: {props.numOfJersey}</h1>
      <button onClick={props.buyJersey}>Buy Jersey</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfJersey: state.jersey.numOfJersey,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyJersey: () => dispatch(buyJersey()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JerseyContainer);
