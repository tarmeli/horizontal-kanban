import React from 'react';
import PropTypes from 'prop-types';

import { taskMenuData, TaskMenuItem } from './';

const TaskMenu = ({
  isMenuOpen, setIsMenuOpen, onTaskDelete, onTaskMove, taskID,
}) => (
  <>
    <button
      className={`task-menu__toggle ${isMenuOpen ? 'task-menu__toggle--active' : ''}`}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      onKeyDown={() => setIsMenuOpen(!isMenuOpen)}
    />

    {isMenuOpen ?
      <ul className="task-menu">
        {taskMenuData.map(item =>
          (<TaskMenuItem
            item={item}
            onTaskDelete={onTaskDelete}
            onTaskMove={onTaskMove}
            key={item.id}
            taskID={taskID}
          />))}
      </ul>
      : ''
    }
  </>
);

TaskMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskMove: PropTypes.func.isRequired,
  taskID: PropTypes.string.isRequired,
};

export { TaskMenu };
