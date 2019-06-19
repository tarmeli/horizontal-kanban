import { Add, Board } from './';
import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

class Kanban extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    const cachedState = localStorage.getItem('kanbanState');
    if (
      typeof cachedState !== 'undefined' &&
      cachedState != null &&
      cachedState.length > 0
    ) {
      const parsedCachedState = JSON.parse(cachedState);

      this.state = {
        tasks: parsedCachedState.tasks,
        rowWithNewTask: 0,
      };
    } else {
      this.state = {
        tasks: [],
        rowWithNewTask: 0,
      };
    }
  }

  componentDidUpdate() {
    const stateStr = JSON.stringify(this.state);
    localStorage.setItem('kanbanState', stateStr);
  }

  handleTaskDelete = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.parentNode.parentNode.parentNode.id, 10);
    let tasks = this.state.tasks.slice();

    tasks = tasks.filter(item => item.id !== id);
    this.setState({
      tasks,
    });
  };

  handleTaskState = (e) => {
    e.preventDefault();
    const { dir } = e.target.dataset;
    const id = parseInt(e.target.parentNode.parentNode.parentNode.id, 10);
    let tasks = this.state.tasks.slice();

    const task = tasks.find(item => item.id === id);
    tasks = tasks.filter(item => item.id !== id);
    task.taskState += dir === 'next' ? 1 : -1;

    tasks.push(task);
    this.setState({
      tasks,
      rowWithNewTask: task.taskState,
    }, () => {
      this.setState({
        rowWithNewTask: 0,
      });
    });
  };

  handleSubmitTask = (e) => {
    e.preventDefault();
    const {
      name, body, priority, deadline,
    } = e.target;
    const tasks = this.state.tasks.slice();
    const id = tasks.sort((a, b) => b.id - a.id)[0];
    tasks.push({
      id: tasks.length === 0 ? 1 : id.id + 1,
      name: name.value,
      body: body.value,
      taskState: 1,
      priority: parseInt(priority.value, 10),
      created: new Date().toJSON(),
      deadline:
        deadline.value.length === 0 ? null : new Date(deadline.value).toJSON(),
    });
    this.setState({
      tasks,
    });
    name.value = '';
    body.value = '';
    this.props.history.push('/');
  };

  render() {
    const { tasks, rowWithNewTask } = this.state;

    return (
      <>
        <Route
          exact
          path="/"
          render={() => (
            <Board
              tasks={tasks.sort((a, b) => b.priority - a.priority)}
              onTaskMove={this.handleTaskState}
              onTaskDelete={this.handleTaskDelete}
              rowWithNewTask={rowWithNewTask}
            />
          )}
        />
        <Route
          path="/Add"
          render={() => <Add onSubmitTask={this.handleSubmitTask} />}
        />
      </>
    );
  }
}

export { Kanban };
