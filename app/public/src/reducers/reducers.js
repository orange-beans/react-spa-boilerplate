import * as ActionTypes from '../constants/ActionTypes.jsx';
import { handleAction, handleActions } from 'redux-actions';

// App Store Filter
const appStoreFilter = handleActions({
  [ActionTypes.SET_APP_STORE_FILTER]: (state, action) => (
    action.payload
  ),
}, 'SHOW_ALL');

export { appStoreFilter };
