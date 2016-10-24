import { Record } from 'immutable';

import { FirebaseList } from 'client/firebase';
import {
  createTaskFulfilled,
  updateTaskFulfilled,
  loadTasksFulfilled,
  removeTaskFulfilled
} from './actions';


const Task = new Record({
  completed: false,
  key: null,
  title: null
});

export const taskList = new FirebaseList({
  onAdd: createTaskFulfilled,
  onChange: updateTaskFulfilled,
  onLoad: loadTasksFulfilled,
  onRemove: removeTaskFulfilled
}, Task);
