import { List } from 'immutable';
import React, { PropTypes } from 'react';

import TaskItem from '../Task-Item';
import styles from './styles.scss';


function TaskList({removeTask, tasks=[], updateTask}) {
  const taskItems = tasks.map((task, index) => {
    return (
      <TaskItem
        removeTask={removeTask}
        key={index}
        task={task}
        updateTask={updateTask}
      />
    );
  });

  return (
    <ul className={styles.taskList}>
      {taskItems}
    </ul>
  );
}

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List),
  updateTask: PropTypes.func.isRequired
};

export default TaskList;
