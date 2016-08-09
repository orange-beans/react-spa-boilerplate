import { NAME } from './constants';

export const USER_FETCH_SUCCESS = `${NAME}/USER_FETCH_SUCCESS`;
export const TOGGLE_ACTIVE = `${NAME}/TOGGLE_ACTIVE`;

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
