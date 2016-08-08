import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';


export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
