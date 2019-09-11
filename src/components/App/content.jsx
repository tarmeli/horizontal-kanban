import { Kanban } from '../Kanban';
import { Form } from '../Form';
import { newTaskFormData, loginFormData, registerFormData } from '../../data';
import { useLocalStorage } from '../../hooks';

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const Content = ({ isLoggedIn, handleLogin, handleRegister }) => {
  const [tasks, setTasks] = useLocalStorage('kanbanstate', []);
  const [rowWithNewTask, setRowWithNewTask] = useState(0);

  const handleTaskDelete = (e, id) => {
    e.preventDefault();
    const taskToBeRemoved = tasks.slice().filter(task => task.id !== id);

    setTasks(taskToBeRemoved);
  };

  const handleTaskState = (e, rowId, taskId) => {
    e.preventDefault();

    const tasksArray = tasks.slice();
    const taskToAdd = tasksArray.find(task => task.id === taskId);
    const filteredTasks = tasksArray.filter(task => task.id !== taskId);
    taskToAdd.taskState = rowId;

    setTasks([...filteredTasks, taskToAdd]);
    setRowWithNewTask(taskToAdd.taskState);

    setTimeout(() => {
      setRowWithNewTask(0);
    }, 1);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();

    const {
      name, body, priority, deadline,
    } = e.target;

    const oldTasks = tasks.slice();
    const id = oldTasks.sort((a, b) => b.id - a.id)[0];
    const newTasks = [...oldTasks, {
      id: oldTasks.length === 0 ? 1 : id.id + 1,
      name: name.value,
      body: body.value,
      taskState: 1,
      priority: parseInt(priority.value, 10),
      created: new Date().toJSON(),
      deadline:
        deadline.value.length === 0 ? null : new Date(deadline.value).toJSON(),
    }];

    // empty the form fields
    name.value = '';
    body.value = '';
    priority.value = null;
    deadline.value = '';

    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Route
        exact
        path="/"
        render={() => (
          isLoggedIn ?
            <Kanban
              tasks={tasks}
              setTasks={setTasks}
              rowWithNewTask={rowWithNewTask}
              handleTaskDelete={handleTaskDelete}
              handleTaskState={handleTaskState}
            /> : <Form
              onSubmit={handleLogin}
              data={loginFormData}
            />)}
      />

      <Route
        path="/add-new-task"
        render={() => (
          isLoggedIn ?
            <Form
              onSubmit={handleSubmitTask}
              data={newTaskFormData}
            /> : <Form
              onSubmit={handleLogin}
              data={loginFormData}
            />)
        }
      />

      <Route
        path="/login"
        render={() => (
          <Form
            onSubmit={handleLogin}
            data={loginFormData}
          />
        )}
      />

      <Route
        path="/register"
        render={() => (
          <Form
            onSubmit={handleRegister}
            data={registerFormData}
          />
        )}
      />

    </div>
  );
};

Content.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

export { Content };
