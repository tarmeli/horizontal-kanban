import { Kanban, Logout } from '../Kanban';
import { Form } from '../Common/Form';
import { newTaskFormData, loginFormData, registerFormData } from '../../data';
import { useLocalStorage } from '../../hooks';

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TASKS_QUERY } from '../../data/constants';

const Content = ({
  token, handleLogin, handleRegister, setToken, newTask,
}) => {
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

  const handleSubmitTask = async (e) => {
    e.preventDefault();
    const {
      name, body, priority, deadline,
    } = e.target;

    try {
      await newTask({
        variables: {
          name: name.value,
          body: body.value,
          priority: priority.value,
          deadline: deadline.value,
        },
        refetchQueries: [{ query: TASKS_QUERY }],
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="container">
      <Route
        exact
        path="/"
        render={() => (
          token ?
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
          token ?
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

      <Route
        path="/logout"
        render={() => (
          <Logout setToken={setToken} />
        )}
      />

    </div>
  );
};

Content.defaultProps = {
  token: null,
};

Content.propTypes = {
  token: PropTypes.string,
  handleLogin: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  newTask: PropTypes.func.isRequired,
};

export { Content };
