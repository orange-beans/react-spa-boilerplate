import update from 'react-addons-update';
import _ from 'lodash';

// Actioins
import * as actions from './actions';
const { USER_FETCH_SUCCESS, TOGGLE_ACTIVE } = actions;

// local helpers
const initialUserState = {
  users: [],
};

// Using update addons
function userReducer(state = initialUserState, action) {
  const { type, payload } = action;
  switch(type) {
    case USER_FETCH_SUCCESS:
      return update(state, {
        users: { $set: payload.users },
      });

    case TOGGLE_ACTIVE: {
      let newUsers = state.users.map((user, index) => {
        if (user.id === payload.id) {
          return update(user, {
            active: { $set: !user.active },
          });
        }
        return user;
      });

      return update(state, {
        users: { $set: newUsers },
      });
    }

    default:
      return state;
  }
}


// function userReducer(state = initialUserState, action) {
//   const { type, payload } = action;
//   switch(type) {
//     case 'users/USER_FETCH_SUCCESS':
//       return {...state, users: payload.users};
//
//     case 'users/TOGGLE_ACTIVE':
//       // FIXME: won't work, this is mutation!
//       //let newState = Object.assign({}, state);
//
//       // work-around: use JP and JS to deep copy the object
//       let newState = JSON.parse(JSON.stringify(state));
//       // Try to copy the array
//       let newUsers = newState.users;
//       let user = _.find(newUsers, {id: payload.user_id});
//       user.active = !user.active;
//       return {...state, users: newUsers};
//     default:
//       return state;
//   }
// }

export default userReducer;
