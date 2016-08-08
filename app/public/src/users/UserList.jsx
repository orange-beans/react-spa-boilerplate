import React, { Component } from 'react';
import { Link } from 'react-router';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class UserList extends Component{

  onToggleActive(user_id) {
    console.log('toggle', user_id);
  }

  static propTypes = {
    onToggleActive: React.PropTypes.func.isRequired,
  }
  // Note that the key prop is nessesary to minimize DOM change
  render() {
    return (
      <ul className="user-list">
        {this.props.users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
              <button onClick={this.props.onToggleActive.bind(null, user.id)}>
                {user.active? 'Active': 'In-active'}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CSSModules(UserList, styles);
