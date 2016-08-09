import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';

export function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}

const store = configureStore(window.devToolsExtension && window.devToolsExtension());

export default store;
