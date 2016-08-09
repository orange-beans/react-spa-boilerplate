
const FEATURE_NAME = 'users';

export const USER_FETCH_SUCCESS = `${FEATURE_NAME}/USER_FETCH_SUCCESS`;
export const TOGGLE_ACTIVE = `${FEATURE_NAME}/TOGGLE_ACTIVE`;

// Action creators
export function FetchSucess(users) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: { users },
  };
}

export function ToggleActive(user_id) {
  return {
    type: TOGGLE_ACTIVE,
    payload: { id: user_id },
  };
}
