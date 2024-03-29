import { Kanban, Logout } from '../Kanban';
import { Form } from '../Common/Form';
import { newTaskFormData, loginFormData, registerFormData } from '../../data';
import { useLocalStorage } from '../../hooks';

import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { TASKS_QUERY } from '../../data/constants';

const Content = ({
  token, handleLogin, handleRegister, setToken, newTask, moveTask, deleteTask,
}) => {
  const [tasks, setTasks] = useLocalStorage('kanbanstate', []);
  const [rowWithNewTask, setRowWithNewTask] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleTaskDelete = async (e, id) => {
    e.preventDefault();

    try {
      await deleteTask({
        variables: {
          id,
        },
        refetchQueries: [{ query: TASKS_QUERY }],
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleTaskState = async (e, rowId, taskId) => {
    e.preventDefault();

    try {
      const updatedTask = await moveTask({
        variables: {
          id: taskId,
          taskState: rowId,
        },
        refetchQueries: [{ query: TASKS_QUERY }],
      });

      setRowWithNewTask(updatedTask.data.moveTask.taskState);

      setTimeout(() => {
        setRowWithNewTask(0);
      }, 1);
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleSubmitTask = async (e) => {
    e.preventDefault();
    const {
      name, body, priority, deadline,
    } = e.target;

    try {
      setLoading(true);
      await newTask({
        variables: {
          name: name.value,
          body: body.value,
          priority: priority.value,
          deadline: deadline.value || undefined,
        },
        refetchQueries: [{ query: TASKS_QUERY }],
      });
    } catch (error) {
      console.log('error', error);
    } finally {
      window.location = '/';
      setLoading(false);
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
              loading={loading}
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
              loading={loading}
            /> : <Form
              loading={loading}
              onSubmit={handleLogin}
              data={loginFormData}
            />)
        }
      />

      <Route
        path="/login"
        render={() => (
          <Form
            loading={loading}
            onSubmit={handleLogin}
            data={loginFormData}
          />
        )}
      />

      <Route
        path="/register"
        render={() => (
          <Form
            loading={loading}
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
  moveTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};

export { Content };
