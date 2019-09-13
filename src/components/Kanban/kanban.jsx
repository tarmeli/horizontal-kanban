import { Board } from './';
import React from 'react';
import PropTypes from 'prop-types';
import { TASKS_QUERY } from '../../data/constants';
import { useQuery } from '@apollo/react-hooks';

const Kanban = ({
  handleTaskDelete, handleTaskState, rowWithNewTask,
}) => {
  const { loading, error, data } = useQuery(TASKS_QUERY);

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;

  return (<Board
    tasks={data.tasksById.sort((a, b) => b.priority - a.priority)}
    onTaskMove={handleTaskState}
    onTaskDelete={handleTaskDelete}
    rowWithNewTask={rowWithNewTask}
  />);
};

Kanban.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    taskState: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    deadline: PropTypes.string,
  })).isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
  handleTaskState: PropTypes.func.isRequired,
  rowWithNewTask: PropTypes.number.isRequired,
};

export { Kanban };
