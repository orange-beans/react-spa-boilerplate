import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import CSSModules from 'react-css-modules';

import _ from 'lodash';
import styles from './styles.css';

class Home extends Component {
  render() {
    return (
      <h1>Welcome to Home page</h1>
    );
  }
}

class MainLayout extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    // Note the `className` rather than `class`
    // `class` is a reserved word in JavaScript, so JSX uses `className`
    // Ultimately, it will render with a `class` in the DOM
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/widgets'>Widgets</Link></li>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

class SearchLayout extends Component{
  render() {
    return (
      <div className="search">
        <header className="search-header"></header>
        <div className="results">
          {this.props.children}
        </div>
        <div className="search-footer pagination"></div>
      </div>
    );
  }
}

class UserList extends Component{

  toggleActive(user_id) {
    console.log('toggle', user_id);
  }

  static propTypes = {
    toggleActive: React.PropTypes.func.isRequired,
  }
  // Note that the key prop is nessesary to minimize DOM change
  render() {
    return (
      <ul className="user-list">
        {this.props.users.map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
              <button onClick={this.props.toggleActive.bind(null, user.id)}>
                {user.active? 'Active': 'In-active'}
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

// Pure representational component
// const UserList = ({ users }) => (
//   <ul className="user-list">
//     {users.map((user) => {
//       return (
//         <li key={user.id}>
//           <Link to={`/users/${user.id}`}>{user.name}</Link>
//           <button>Toggle Active</button>
//         </li>
//       );
//     })}
//   </ul>
// );

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
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.users)
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

class WidgetList extends Component{
  render() {
    return (
      <ul className="user-list">
        <li>Game</li>
        <li>Music</li>
        <li>Sports</li>
      </ul>
    );
  }
}

// class ContainerDemo extends Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route path='/' component={MainLayout}>
//           <IndexRoute component={Home}/>
//           <Route component={SearchLayout}>
//             <Route path='users' component={UserListContainer}></Route>
//             <Route path='widgets' component={WidgetList}></Route>
//           </Route>
//         </Route>
//       </Router>
//     );
//   }
// }

class ContainerDemo extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={MainLayout}>
          <IndexRoute component={Home}/>
          <Route component={SearchLayout}>
            <Route path='users' component={UserListContainer}></Route>
            <Route path='widgets' component={WidgetList}></Route>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default ContainerDemo;
