/* eslint-disable no-constant-condition */
import { browserHistory as history } from 'react-router';
import { takeEvery } from 'redux-saga';
import { call, fork, put } from 'redux-saga/effects';

import { firebaseAuth } from 'client/firebase';
import { ACTIONS } from './constants';
import {
  signInFulfilled,
  signInFailed,
  signOutFulfilled,
  signOutFailed
} from './actions';


function* signIn({ payload }) {
  try {
    const { user } = yield call([firebaseAuth, firebaseAuth.signInWithPopup], payload.authProvider);
    yield put(signInFulfilled(user));
    yield history.push('/tasks');
  }
  catch (error) {
    yield put(signInFailed(error));
  }
}

function* signOut() {
  try {
    yield call([firebaseAuth, firebaseAuth.signOut]);
    yield put(signOutFulfilled());
    yield history.replace('/sign-in');
  }
  catch (error) {
    yield put(signOutFailed(error));
  }
}


//=====================================
//  WATCHERS
//-------------------------------------

function* watchSignIn() {
  yield call(takeEvery, ACTIONS.SIGN_IN, signIn);
}

function* watchSignOut() {
  yield call(takeEvery, ACTIONS.SIGN_OUT, signOut);
}


//=====================================
//  AUTH SAGAS
//-------------------------------------

export const authSagas = [
  fork(watchSignIn),
  fork(watchSignOut)
];
