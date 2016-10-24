import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

import styles from './styles.scss';

function TaskFilters({ filter }) {
  return (
    <div className={styles.taskFilters}>
      <Link className={classNames({[styles.active]: !filter})} to="/tasks">View All</Link>
      &nbsp;|&nbsp;
      <Link activeClassName={styles.active} to={{pathname: '/tasks', query: {filter: 'active'}}}>Active</Link>
      &nbsp;|&nbsp;
      <Link activeClassName={styles.active} to={{pathname: '/tasks', query: {filter: 'completed'}}}>Completed</Link>
    </div>
  );
}

TaskFilters.propTypes = {
  filter: PropTypes.string
};

export default TaskFilters;
