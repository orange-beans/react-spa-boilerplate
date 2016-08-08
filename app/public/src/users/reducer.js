import _ from 'lodash';

// local helpers
//updateUser

const initialUserState = {
  users: [],
};

function userReducer(state = initialUserState, action) {
  const { type, payload } = action;
  console.log(state);
  switch(type) {
    case 'users/USER_FETCH_SUCCESS':
      return {...state, users: payload.users};

    case 'users/TOGGLE_ACTIVE':
      // FIXME: won't work, as this is copying by referrence,
      //
      //let newState = Object.assign({}, state);
      let newState = JSON.parse(JSON.stringify(state));
      // Try to copy the array
      let newUsers = newState.users;
      let user = _.find(newUsers, {id: payload.user_id});
      // FIXME: this is the mutation!
      user.active = !user.active;
      console.log(newState);
      return {...state, users: newUsers};
      return state;
    default:
      return state;
  }
}

export default userReducer;
