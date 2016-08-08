import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import Home from './components/Home';
import MainLayout from './components/MainLayout';
import SearchLayout from './components/SearchLayout';
import GameList from './components/GameList';
import UserListContainer from './components/UserList';

import CSSModules from 'react-css-modules';
import styles from './styles.css';

class ReduxDemo extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={MainLayout}>
          <IndexRoute component={Home}/>
          <Route component={SearchLayout}>
            <Route path='users' component={UserListContainer}></Route>
            <Route path='games' component={GameList}></Route>
          </Route>
        </Route>
      </Router>
    );
  }
}

export default CSSModules(ReduxDemo, styles);
