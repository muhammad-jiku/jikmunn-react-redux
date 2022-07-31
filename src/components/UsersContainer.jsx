import React, { useEffect } from 'react';
import { fetchUsers } from '../redux/actionCreator/index';
import { connect } from 'react-redux';

const UsersContainer = ({ userData, fetchUserData }) => {
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);
  return (
    <div>
      {userData?.loading ? (
        <h2>Loading....</h2>
      ) : userData?.error ? (
        <h2>{userData?.error}</h2>
      ) : (
        <div>
          <h2>Users list:</h2>
          <div>
            {' '}
            {userData &&
              userData?.users &&
              userData?.users?.map((user) => (
                <h4 key={user?.id}> {user?.name}</h4>
              ))}{' '}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
