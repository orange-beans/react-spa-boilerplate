import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
// Overall Page Layout Components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Top route Components
import { MainLayout } from './layout';
import { Home } from './home';
import { SearchLayout } from './search';
import { UserListContainer } from './users';
import { GameListContainer } from './games';

const store = configureStore(window.devToolsExtension && window.devToolsExtension());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={MainLayout}>
            <IndexRoute component={Home}/>
            <Route component={SearchLayout}>
              <Route path='users' component={UserListContainer}></Route>
              <Route path='games' component={GameListContainer}></Route>
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
