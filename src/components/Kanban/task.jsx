import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faBug } from '@fortawesome/free-solid-svg-icons';

const Task = ({ data, onTaskMove, onTaskDelete }) => (
  <div className={`task${data.deadline ? '' : ' task--no-deadline'}`} id={data.id}>
    <div className="task__title" data-priority={data.priority}>
      {data.name} - {data.priority}
          <FontAwesomeIcon icon={faBug} />

      <div className="task__date task__date--created">
        Created: {new Date(data.created).toLocaleDateString('fi-FI')}
      </div>
    </div>
    <p className="task__body">{data.body}</p>
    <div className="task__footer">
      {
        data.deadline ?
          <div className="task__date task__date--deadline">
            DL {new Date(data.deadline).toLocaleDateString('fi-FI')}
          </div> :
          null
      }
      <div className="task__footer-button-group">
        <span
          className="task__prev task__footer-button"
          data-dir="prev"
          disabled={data.taskState <= 1}
          onClick={data.taskState <= 1 ? null : onTaskMove}
          onKeyDown={data.taskState <= 1 ? null : onTaskMove}
          role="button"
          tabIndex={data.id}
        >
          Up
        </span>
        <span
          className="task__del task__footer-button"
          onClick={onTaskDelete}
          onKeyDown={onTaskMove}
          role="button"
          tabIndex={data.id}
        >
          <FontAwesomeIcon icon={faTrash} />
        </span>
        <span
          className="task__next task__footer-button"
          data-dir="next"
          onClick={data.taskState >= 4 ? null : onTaskMove}
          disabled={data.taskState >= 4}
          onKeyDown={data.taskState >= 4 ? null : onTaskMove}
          role="button"
          tabIndex={data.id}
        >
          Down
        </span>
      </div>
    </div>
  </div>
);

Task.propTypes = {
  data: PropTypes.shape({
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
