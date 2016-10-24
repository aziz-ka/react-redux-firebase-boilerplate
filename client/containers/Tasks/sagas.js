/* eslint-disable no-constant-condition */
import { LOCATION_CHANGE } from 'react-router-redux';
import { eventChannel, takeEvery } from 'redux-saga';
import { call, cancel, fork, put, take } from 'redux-saga/effects';

import { ACTIONS as AUTH_ACTIONS } from 'client/auth';
import { ACTIONS as TASK_ACTIONS } from './constants';
import { taskList } from './task-list';
import {
  createTaskFailed,
  removeTaskFailed,
  updateTaskFailed,
  filterTasks
} from './actions';


function subscribe() {
  return eventChannel(emit => taskList.subscribe(emit));
}

function* read() {
  const channel = yield call(subscribe);
  while (true) {
    let action = yield take(channel);
    yield put(action);
  }
}

function* write(context, method, onError, ...params) {
  try {
    yield call([context, method], ...params);
  }
  catch (error) {
    yield put(onError(error));
  }
}

const createTask = write.bind(null, taskList, taskList.push, createTaskFailed);
const removeTask = write.bind(null, taskList, taskList.remove, removeTaskFailed);
const updateTask = write.bind(null, taskList, taskList.update, updateTaskFailed);


function* watchAuthentication({ payload }) {
  taskList.path = `tasks/${payload.uid}`;
  const job = yield fork(read);

  yield take([AUTH_ACTIONS.SIGN_OUT_FULFILLED]);
  yield cancel(job);
}

function* watchCreateTask({ payload }) {
  yield fork(createTask, payload.task);
}

function* watchLocationChange({ payload }) {
  if (payload.pathname === '/tasks') {
    yield put(filterTasks(payload.query.filter));
  }
}

function* watchRemoveTask({ payload }) {
  yield fork(removeTask, payload.task.key);
}

function* watchUpdateTask({ payload }) {
  yield fork(updateTask, payload.task.key, payload.changes);
}


export const taskSagas = [
  fork(takeEvery, AUTH_ACTIONS.SIGN_IN_FULFILLED, watchAuthentication),
  fork(takeEvery, TASK_ACTIONS.CREATE_TASK, watchCreateTask),
  fork(takeEvery, TASK_ACTIONS.REMOVE_TASK, watchRemoveTask),
  fork(takeEvery, TASK_ACTIONS.UPDATE_TASK, watchUpdateTask),
  fork(takeEvery, LOCATION_CHANGE, watchLocationChange)
];
