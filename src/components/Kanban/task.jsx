import { faBug, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Task = ({
  task, onTaskMove, onTaskDelete,
}) => {
  const [expanded, setExpanded] = useState(false);

  const onPrevClick = (e) => {
    (() => (task.taskState <= 1 ? null : onTaskMove(e)))();
  };

  const onNextClick = (e) => {
    (() => (task.taskState >= 4 ? null : onTaskMove(e)))();
  };

  return (
    <div
      className={`task${task.deadline ? '' : ' task--normal'}${expanded ? ' task--expanded' : ''}`}
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
              {task.priority}
            </div>

            <div className="task__header-sub--right-bottom">
              <FontAwesomeIcon icon={faBug} />
            </div>
          </div>
        </div>

        <div className="task__date task__date--created">
          {new Date(task.created).toLocaleDateString('fi-FI')}
        </div>
      </div>

      <p className="task__body">{task.body}</p>
      <div className="task__footer">
        {task.deadline ? (
          <div className="task__date task__date--deadline">
            DL {new Date(task.deadline).toLocaleDateString('fi-FI')}
          </div>
        ) : null}
        <div className="task__footer-button-group">
          <span
            className="task__prev task__footer-button"
            data-dir="prev"
            disabled={task.taskState <= 1}
            onClick={onPrevClick}
            onKeyDown={onPrevClick}
            role="button"
            tabIndex={task.id}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </span>
          <span
            className="task__del task__footer-button"
            onClick={onTaskDelete}
            onKeyDown={onTaskMove}
            role="button"
            tabIndex={task.id}
          >
            <FontAwesomeIcon icon={faTrash} />
          </span>
          <span
            className="task__next task__footer-button"
            data-dir="next"
            onClick={onNextClick}
            disabled={task.taskState >= 4}
            onKeyDown={onNextClick}
            role="button"
            tabIndex={task.id}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    taskState: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
    created: PropTypes.string.isRequired,
    deadline: PropTypes.string,
  }).isRequired,
  onTaskMove: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export { Task };
