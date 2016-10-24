import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';


export class TaskForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {title: ''};

    this.handleChange = ::this.handleChange;
    this.handleKeyUp = ::this.handleKeyUp;
    this.handleSubmit = ::this.handleSubmit;
  }

  clearInput() {
    this.setState({title: ''});
  }

  handleChange({ target }) {
    this.setState({title: target.value});
  }

  handleKeyUp({ keyCode }) {
    if (keyCode === 27) this.clearInput();
  }

  handleSubmit(event) {
    event.preventDefault();
    const title = this.state.title.trim();

    if (title.length) this.props.handleSubmit(title);
    this.clearInput();
  }

  render() {
    return (
      <form className={styles.taskForm} onSubmit={this.handleSubmit} noValidate>
        <input
          autoComplete="off"
          autoFocus
          className={styles.taskFormInput}
          maxLength="64"
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
          placeholder="What needs to be done?"
          type="text"
          value={this.state.title}
        />
      </form>
    );
  }
}

export default TaskForm;
