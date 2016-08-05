import React, { Component } from 'react';

import UserList from './UserList.jsx';

import _ from 'lodash';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class UserListContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };

    // binding 'this'
    this.getUsers = this.getUsers.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.toggleActive = this.toggleActive.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
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
      this.setState({
        users,
      });
    });
  }

  updateUser() {
    fetch('http://localhost:3001/api/update', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.users),
    }).then((res) => {
      console.log(res);
    });
  }

  toggleActive(user_id) {
    // find from state object and update Active status
    let newState = Object.assign({}, this.state);
    let user = _.find(newState.users, { id:user_id });
    user.active = !user.active;
    this.setState(newState);
    this.updateUser();
  }

  // Note that the key prop is nessesary to minimize DOM change
  render() {
    return (
      <UserList users={this.state.users} toggleActive={this.toggleActive}></UserList>
    );
  }
}

export default CSSModules(UserListContainer, styles);
