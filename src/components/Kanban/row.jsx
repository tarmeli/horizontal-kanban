import PropTypes from 'prop-types';
import React from 'react';
import { Task } from './';

const Row = ({
  rowTitle, tasks, onTaskMove, onTaskDelete,
}) => (
  <div className="board-list__row">
    <h2 className="board-list__title">{rowTitle}</h2>
    <div className="board-list__task-view">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onTaskMove={onTaskMove}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </div>
  </div>
);

Row.propTypes = {
  rowTitle: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    taskState: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    deadline: PropTypes.string,
  })).isRequired,
  onTaskMove: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export { Row };
