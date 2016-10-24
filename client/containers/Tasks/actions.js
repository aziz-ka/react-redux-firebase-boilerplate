import { ACTIONS } from './constants';

export function createTask(title) {
  return {
    type: ACTIONS.CREATE_TASK,
    payload: {
      task: {
        title,
        completed: false
      }
    }
  };
}

export function createTaskFailed(error) {
  return {
    type: ACTIONS.CREATE_TASK_FAILED,
    payload: { error }
  };
}

export function createTaskFulfilled(task) {
  return {
    type: ACTIONS.CREATE_TASK_FULFILLED,
    payload: { task }
  };
}

export function removeTask(task) {
  return {
    type: ACTIONS.REMOVE_TASK,
    payload: { task }
  };
}

export function removeTaskFailed(error) {
  return {
    type: ACTIONS.REMOVE_TASK_FAILED,
    payload: { error }
  };
}

export function removeTaskFulfilled(task) {
  return {
    type: ACTIONS.REMOVE_TASK_FULFILLED,
    payload: { task }
  };
}

export function updateTask(task, changes) {
  return {
    type: ACTIONS.UPDATE_TASK,
    payload: { task, changes }
  };
}

export function updateTaskFailed(error) {
  return {
    type: ACTIONS.UPDATE_TASK_FAILED,
    payload: { error }
  };
}

export function updateTaskFulfilled(task) {
  return {
    type: ACTIONS.UPDATE_TASK_FULFILLED,
    payload: { task }
  };
}

export function filterTasks(filterType) {
  return {
    type: ACTIONS.FILTER_TASKS,
    payload: { filterType }
  };
}

export function loadTasksFulfilled(tasks) {
  return {
    type: ACTIONS.LOAD_TASKS_FULFILLED,
    payload: { tasks }
  };
}
