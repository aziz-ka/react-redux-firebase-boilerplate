import { List, Record } from 'immutable';
import { ACTIONS } from './constants';


export const TasksState = new Record({
  filter: '',
  list: new List()
});


export function tasksReducer(state = new TasksState(), { payload, type }) {
  switch (type) {
    case ACTIONS.CREATE_TASK_FULFILLED:
      return state.set('list', state.list.unshift(payload.task));

    case ACTIONS.FILTER_TASKS:
      return state.set('filter', payload.filterType || '');

    case ACTIONS.LOAD_TASKS_FULFILLED:
      return state.set('list', new List(payload.tasks.reverse()));

    case ACTIONS.REMOVE_TASK_FULFILLED:
      return state.set('list', state.list.filter(task => {
        return task.key !== payload.task.key;
      }));

    case ACTIONS.UPDATE_TASK_FULFILLED:
      return state.set('list', state.list.map(task => {
        return task.key === payload.task.key ? payload.task : task;
      }));

    default:
      return state;
  }
}
