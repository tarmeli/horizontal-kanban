import React from 'react';
import PropTypes from 'prop-types';

import { Column, boardData } from './';

const Board = ({ data, onTaskMove, onTaskDelete }) => (
  <div className="board">
    <div className="board-list">
      {boardData.map(column => (
        <Column
          data={data.filter(task => task.taskState === column.id)}
          columnTitle={column.title}
          onTaskMove={onTaskMove}
          onTaskDelete={onTaskDelete}
          key={column.id}
        />
        ))}
    </div>
  </div>
);

Board.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
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

export { Board };
