import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ArrowIcon } from '../Common';

import { boardData, SubMenu } from './';


const TaskMenuItem = ({
  item, onTaskDelete, onTaskMove, taskID,
}) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const onClick = (event, action) => {
    switch (action) {
      case 'move':
        setIsDropdownActive(!isDropdownActive);
        break;
      case 'delete':
        onTaskDelete(event, taskID);
        break;
      default:
        return null;
    }
    return null;
  };

  return (
    <>
      <li
        className={`task-menu__button ${`task-menu__button--${item.type}`} ${`task-menu__button--${item.action}`} ${isDropdownActive ? 'task-menu__button--active' : ''}`}
      >
        <input
          type="button"
          value={item.title}
          onClick={event => onClick(event, item.action)}
        />

        {item.type === 'dropdown' ?
          <ArrowIcon />
          : ''
        }
      </li>

      {isDropdownActive && item.type === 'dropdown' ?
        <SubMenu
          data={boardData}
          action={onTaskMove}
          id={taskID}
        />
        : ''
      }
    </>
  );
};

TaskMenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onTaskDelete: PropTypes.func.isRequired,
  onTaskMove: PropTypes.func.isRequired,
  taskID: PropTypes.number.isRequired,
};

export { TaskMenuItem };
