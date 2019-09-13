import { Row, boardData } from './';

import PropTypes from 'prop-types';
import React from 'react';

const Board = ({
  tasks, onTaskMove, onTaskDelete, rowWithNewTask,
}) => (
  <div className="board">
    <div className="board-list">
      {boardData.map(row => (
        <Row
          tasks={tasks.filter(task => task.taskState === row.id)}
          rowTitle={row.title}
          onTaskMove={onTaskMove}
          amountOfRows={boardData.length}
          onTaskDelete={onTaskDelete}
          hasNewTask={rowWithNewTask === row.id}
          key={row.id}
        />
      ))}
    </div>
  </div>
);

Board.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.string,
    taskState: PropTypes.number.isRequired,
    priority: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    deadline: PropTypes.string,
  })).isRequired,
  rowWithNewTask: PropTypes.number.isRequired,
  onTaskMove: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export { Board };
