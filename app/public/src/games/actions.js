
const FEATURE_NAME = 'games';

export const FETCH_SUCCESS = `${FEATURE_NAME}/FETCH_SUCCESS`;
export const TOGGLE_ACTIVE = `${FEATURE_NAME}/TOGGLE_ACTIVE`;

// Action creators
export function FetchSucess(games) {
  return {
    type: FETCH_SUCCESS,
    payload: { games },
  };
}

export function ToggleActive(id) {
  return {
    type: TOGGLE_ACTIVE,
    payload: { id },
  };
}
