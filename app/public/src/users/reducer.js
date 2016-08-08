import _ from 'lodash';

// local helpers
//updateUser

const initialUserState = {
  users: [],
};

function userReducer(state = initialUserState, action) {
  const { type, load } = action;
  switch(type) {
    case 'users/USER_FETCH_SUCCESS':
      return {...state, users: load.users};
    case 'users/TOGGLE_ACTIVE':
      let newState = Object.assign({}, state);
      let newUsers = newState.users;
      let user = _.find(newUsers, {id: load.user_id});
      user.active = !user.active;
      return {...state, users: newUsers};
    default:
      return state;
  }
}

export default userReducer;
