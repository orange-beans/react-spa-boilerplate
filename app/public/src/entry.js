// The following requires are needed to use fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';

import configureStore from './configureStore.js';
const store = configureStore(window.__INITIAL_STATE__);

const mountTarget = document.getElementById('root');
const mountNode = (
    <Root store={store} />
);

// import { Router, Route, IndexRoute } from 'react-router';
//
// class Home extends Component {
//   render() {
//     return (
//       <h1>Welcome to Home page</h1>
//     );
//   }
// }
//
// const mountTarget = document.getElementById('root');
// const mountNode = (
//     <Router>
//       <Route path='/' component={Home}></Route>
//     </Router>
// );

ReactDOM.render(mountNode, mountTarget);
