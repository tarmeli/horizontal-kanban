import { Board } from './';
import React from 'react';
import PropTypes from 'prop-types';
import { TASKS_QUERY } from '../../data/constants';
import { useQuery } from '@apollo/react-hooks';

const Kanban = ({
  handleTaskDelete, handleTaskState, rowWithNewTask,
}) => {
  const { loading, error, data } = useQuery(TASKS_QUERY);

  return (<Board
    loading={loading}
    error={error}
    tasks={loading ? [{}] : data.tasksById.sort((a, b) => b.priority - a.priority)}
    onTaskMove={handleTaskState}
    onTaskDelete={handleTaskDelete}
    rowWithNewTask={rowWithNewTask}
  />);
};

Kanban.propTypes = {
  handleTaskDelete: PropTypes.func.isRequired,
  handleTaskState: PropTypes.func.isRequired,
  rowWithNewTask: PropTypes.number.isRequired,
};

export { Kanban };
