import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import Button from '../Button';
import Icon from '../Icon';
import styles from './styles.scss';


export class TaskItem extends Component {
  constructor(props) {
    super(props);

    this.state = {editing: false};

    this.edit = ::this.edit;
    this.handleKeyUp = ::this.handleKeyUp;
    this.remove = ::this.remove;
    this.save = ::this.save;
    this.stopEditing = ::this.stopEditing;
    this.toggleStatus = ::this.toggleStatus;
  }

  edit() {
    this.setState({editing: true});
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.save(event);
    }
    else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }

  remove() {
    this.props.removeTask(this.props.task);
  }

  save({target={}}) {
    if (this.state.editing) {
      const { task } = this.props;
      const title = target.value || '';

      if (title.length && title !== task.title) {
        this.props.updateTask(task, {title});
      }

      this.stopEditing();
    }
  }

  stopEditing() {
    this.setState({editing: false});
  }

  toggleStatus() {
    const { task } = this.props;
    this.props.updateTask(task, {completed: !task.completed});
  }

  renderTitle(task) {
    return (
      <div className={styles.taskItemTitle}>
        {task.title}
      </div>
    );
  }

  renderTitleInput(task) {
    return (
      <input
        autoComplete="off"
        autoFocus
        className={styles.taskItemInput}
        defaultValue={task.title}
        maxLength="64"
        onKeyUp={this.handleKeyUp}
        type="text"
      />
    );
  }

  render() {
    const { editing } = this.state;
    const { task={} } = this.props;

    const taskItemClasses = classNames(styles.taskItem, {
      [styles.taskItemCompleted]: task.completed
    });
    const buttonClasses = classNames(
      styles.btnIcon,
      styles.taskItemButton
    );
    const doneButtonClasses = classNames(buttonClasses, {
      [styles.active]: task.completed
    });

    return (
      <li className={taskItemClasses}>
        {editing ? this.renderTitleInput(task) : this.renderTitle(task)}

        <div className={styles.buttons}>
          <Button
            className={doneButtonClasses}
            data-test-id='completed-button'
            onClick={this.toggleStatus}>
            <Icon name="done" />
          </Button>
          <Button
            className={buttonClasses}
            data-test-id='edit-button'
            onClick={this.edit}>
            <Icon name="mode_edit" />
          </Button>
          <Button
            className={buttonClasses}
            data-test-id='stop-edit-button'
            onClick={this.stopEditing}>
            <Icon name="clear" />
          </Button>
          <Button
            className={buttonClasses}
            data-test-id='remove-button'
            onClick={this.remove}>
            <Icon name="delete" />
          </Button>
        </div>
      </li>
    );
  }
}

TaskItem.propTypes = {
  removeTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TaskItem;
