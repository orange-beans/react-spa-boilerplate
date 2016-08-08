import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Overall Page Layout Components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Top route Components
import { MainLayout } from './layout';
import { Home } from './home';
import { SearchLayout } from './search';
import { UserListContainer } from './users';
import { GameList } from './games';


class App extends Component {
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

export default App;
