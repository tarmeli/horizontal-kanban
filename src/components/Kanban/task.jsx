import { faBug } from '@fortawesome/free-solid-svg-icons';
import { TaskMenu } from './';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Task = ({
  task,
  onTaskDelete,
  onTaskMove,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`task ${task.deadline ? '' : 'task--normal'} ${expanded ? 'task--expanded' : ''}`}
      id={task.id}
    >
      <div className="task__header" data-priority={task.priority}>
        <div className="task__header-sub">
          <div className="task__header-sub--left">
            <div className="task__header-sub--left-top">
              {task.priority}
            </div>

            <div className="task__header-sub--left-bottom">
              <FontAwesomeIcon icon={faBug} />
            </div>
          </div>

          <div className="task__header-sub--center">
            <div className="task__title">
              <button onClick={() => setExpanded(!expanded)}>
                {task.name}
              </button>
            </div>
          </div>

          <div className="task__header-sub--right">
            <div className="task__header-sub--right-top">
              <TaskMenu
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                onTaskDelete={onTaskDelete}
                onTaskMove={onTaskMove}
                taskID={task.id}
              />
            </div>
          </div>
        </div>

        <div className="task__date task__date--created">
          {new Date(task.createdAt).toLocaleDateString('fi-FI')}
        </div>
      </div>

      <p className="task__body">{task.body}</p>
      <div className="task__footer">
        {task.deadline ? (
          <div className="task__date task__date--deadline">
            DL {new Date(task.deadline).toLocaleDateString('fi-FI')}
          </div>
        ) : null}
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    taskState: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    deadline: PropTypes.string,
  }).isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskMove: PropTypes.func.isRequired,
};

export { Task };
