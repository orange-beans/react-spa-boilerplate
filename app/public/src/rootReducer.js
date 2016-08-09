import { combineReducers } from 'redux';

import users from './users';
import games from './games';

const rootReducer = combineReducers({
  userState: users.reducer,
  gameState: games.reducer,
});

export default rootReducer;
