import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import UserList from './UserList.jsx';
// Actioins
import * as actions from './actions';
const { FetchSucess, ToggleActive } = actions;

class UserListContainer extends Component{
  constructor(props) {
    super(props);

    // binding 'this'
    this.fetchUsers = this.fetchUsers.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
    // Try to use Arrow functions in Promise
    // to maintain this context
    fetch('http://localhost:3001/api/users')
    .then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then((users) => {
      console.log(users);
      this.props.onFetchSuccess(users);
    });
  }

  // TODO: how can we update data back to the server as a side-effect
  // maybe use redux-saga???
  updateUsers() {
    fetch('http://localhost:3001/api/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.props.users),
    }).then((res) => {
      console.log(res);
    });
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
    users: state.userState.users,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchSuccess: (users) => dispatch(FetchSucess(users)),
    onToggleActive: (user_id) => dispatch(ToggleActive(user_id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
