import { ACTIONS } from './constants';


export function signIn(authProvider) {
  return {
    type: ACTIONS.SIGN_IN,
    payload: { authProvider }
  };
}

export function signInFailed(error) {
  return {
    type: ACTIONS.SIGN_IN_FAILED,
    payload: { error }
  };
}

export function signInFulfilled(authUser) {
  return {
    type: ACTIONS.SIGN_IN_FULFILLED,
    payload: authUser
  };
}

export function signOut() {
  return {
    type: ACTIONS.SIGN_OUT
  };
}

export function signOutFailed(error) {
  return {
    type: ACTIONS.SIGN_OUT_FAILED,
    payload: { error }
  };
}

export function signOutFulfilled() {
  return {
    type: ACTIONS.SIGN_OUT_FULFILLED
  };
}


export function signInWithGithub() {
  return signIn(new firebase.auth.GithubAuthProvider());
}

export function signInWithGoogle() {
  return signIn(new firebase.auth.GoogleAuthProvider());
}

export function signInWithTwitter() {
  return signIn(new firebase.auth.TwitterAuthProvider());
}
