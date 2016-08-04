import * as ActionTypes from '..constants/ActionTypes.jsx';
import { createAction } from 'redux-actions';

// Action: Set AppStore Filter
const setAppStoreFilter = createAction(
  ActionTypes.SET_APP_STORE_FILTER,
  filter => filter
);

export  {
  setAppStoreFilter,
 };
