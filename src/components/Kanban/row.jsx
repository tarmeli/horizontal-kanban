import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Task } from './';

const Row = ({
  rowTitle, tasks, onTaskMove, onTaskDelete, hasNewTask,
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
    <div className={`board-list__row${isNewTaskFlashActive ? ' board-list__row--new-task-flash' : ''}`}>
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
};

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
  hasNewTask: PropTypes.bool.isRequired,
  onTaskMove: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export { Row };
