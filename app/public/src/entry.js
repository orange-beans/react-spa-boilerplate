// The following requires are needed to use fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Root from './Root.jsx';

import configureStore from './configureStore.js';
const store = configureStore(window.__INITIAL_STATE__);

import RouterReduxDemo from './RouterReduxDemo';

const mountTarget = document.getElementById('root');

const mountNode = (
  <Root store={store} />
);

//const mountNode = <RouterReduxDemo/>;

ReactDOM.render(mountNode, mountTarget);
