import { Kanban } from '../Kanban';
import { Form } from '../Form';
import { useLocalStorage } from '../../hooks';

import React, { useState } from 'react';
import { Route } from 'react-router-dom';

const Content = () => {
  const [tasks, setTasks] = useLocalStorage('kanbanstate', []);
  const [rowWithNewTask, setRowWithNewTask] = useState('');

  const handleTaskDelete = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.parentNode.parentNode.parentNode.id, 10);
    const newTasks = tasks.slice();
    setTasks(newTasks.filter(item => item.id !== id));
  };

  const handleTaskState = (e) => {
    e.preventDefault();
    const { dir } = e.target.dataset;
    const id = parseInt(e.target.parentNode.parentNode.parentNode.id, 10);
    let newTasks = tasks.slice();
    const task = newTasks.find(item => item.id === id);
    newTasks = newTasks.filter(item => item.id !== id);
    task.taskState += dir === 'next' ? 1 : -1;

    newTasks.push(task);
    setTasks(newTasks);
    setRowWithNewTask(task.taskState);
    setRowWithNewTask(0);
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();
    const {
      name, body, priority, deadline,
    } = e.target;

    const newTasks = tasks.slice();
    const id = newTasks.sort((a, b) => b.id - a.id)[0];
    newTasks.push({
      id: newTasks.length === 0 ? 1 : id.id + 1,
      name: name.value,
      body: body.value,
      taskState: 1,
      priority: parseInt(priority.value, 10),
      created: new Date().toJSON(),
      deadline:
        deadline.value.length === 0 ? null : new Date(deadline.value).toJSON(),
    });
    name.value = '';
    body.value = '';
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <Route
        exact
        path="/"
        render={() => (
          <Kanban
            tasks={tasks}
            setTasks={setTasks}
            {...rowWithNewTask}
            handleTaskDelete={handleTaskDelete}
            handleTaskState={handleTaskState}

          />)}
      />

      <Route
        path="/add-new-task"
        render={() => (
          <Form
            onSubmitTask={handleSubmitTask}
          />)}
      />

    </div>
  );
};

export { Content };
