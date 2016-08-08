import { combineReducers } from 'redux';

import users from './users';

const rootReducer = combineReducers({
  userState: users.reducer,
});

export default rootReducer;
