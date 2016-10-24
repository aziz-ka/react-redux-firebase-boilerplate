import { createSelector } from 'reselect';


export function isAuthenticated(state) {
  return state.data.auth.authenticated;
}

export const getAuth = createSelector(
  state => state.data.auth,
  auth => auth.toJS()
);
