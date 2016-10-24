import { Record } from 'immutable';

import { ACTIONS } from './constants';


export const AuthState = new Record({
  authenticated: false,
  uid: null,
  user: null
});

export function authReducer(state = new AuthState(), { payload, type }) {
  switch (type) {
    case ACTIONS.SIGN_IN_FULFILLED:
      return state.merge({
        authenticated: true,
        uid: payload.uid,
        user: payload
      });

    case ACTIONS.SIGN_OUT_FULFILLED:
      return state.merge({
        authenticated: false,
        uid: null,
        user: null
      });

    default:
      return state;
  }
}
