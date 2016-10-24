import { List } from 'immutable';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TaskFilters from '../../components/Task-Filters';
import TaskForm from '../../components/Task-Form';
import TaskList from '../../components/Task-List';
import { getVisibleTasks } from './selectors';
import {
  createTask,
  filterTasks,
  removeTask,
  updateTask
} from './actions';


function TasksPage({createTask, location, removeTask, tasks, updateTask}) {
  const { filter } = location.query;

  return (
    <div>
      <TaskForm handleSubmit={createTask} />
      <TaskFilters filter={filter} />
      <TaskList
        filter={filter}
        removeTask={removeTask}
        tasks={tasks}
        updateTask={updateTask}
      />
    </div>
  );
}

TasksPage.propTypes = {
  createTask: PropTypes.func.isRequired,
  filterTasks: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List),
  updateTask: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tasks: getVisibleTasks(state)
});

const mapDispatchToProps = {
  createTask,
  filterTasks,
  removeTask,
  updateTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);
