import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Task } from './';

const Row = ({
  rowTitle, tasks, onTaskMove, onTaskDelete, hasNewTask, amountOfRows, loading,
}) => {
  const [isNewTaskFlashActive, setIsNewTaskFlashActive] = useState(false);

  useEffect(() => {
    if (hasNewTask) {
      setIsNewTaskFlashActive(true);

      setTimeout(() => {
        setIsNewTaskFlashActive(false);
      }, 1000);
    }
  }, [hasNewTask]);

  return (
    <div className={`board-list__row ${isNewTaskFlashActive ? 'right-border-flash' : ''} ${loading ? 'loader' : ''}`}>
      <div className="board-list__title">
        <h2>{rowTitle}</h2>
      </div>
      <div className="board-list__task-view">
        {tasks.map(task => (
          <Task
            amountOfRows={amountOfRows}
            key={task.id}
            task={task}
            onTaskMove={onTaskMove}
            onTaskDelete={onTaskDelete}
          />
      ))}
      </div>
    </div>
  );
};

Row.propTypes = {
  rowTitle: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    taskState: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    deadline: PropTypes.string,
  })).isRequired,
  hasNewTask: PropTypes.bool.isRequired,
  onTaskMove: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  amountOfRows: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
};

export { Row };
