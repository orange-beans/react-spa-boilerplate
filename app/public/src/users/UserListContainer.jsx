import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import UserList from './UserList.jsx';

import { NAME } from './constants';
import * as userApi from './api';
import * as actions from './actions';
const { FetchSucess, ToggleActive } = actions;

class UserListContainer extends Component{
  constructor(props) {
    super(props);
    // binding 'this'
  }

  componentDidMount() {
    userApi.fetchUsers(this.props.onFetchSuccess);
  }

  // Note to use nextProps instead of this.props
  componentWillUpdate(nextProps) {
    userApi.updateUsers(nextProps.users);
  }

  // Note that the key prop is nessesary to minimize DOM change
  render() {
    // TODO: how can we update data back to the server as a side-effect
    // work-around: update everytime when render
    //this.updateUsers();
    console.log('rendering');
    return (
      <UserList users={this.props.users} onToggleActive={this.props.onToggleActive}></UserList>
    );
  }
}

// put selectors here later
const mapStateToProps = (state, ownProps) => {
  return {
    users: state[NAME].users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchSuccess: (users) => dispatch(FetchSucess(users)),
    onToggleActive: (user_id) => dispatch(ToggleActive(user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
