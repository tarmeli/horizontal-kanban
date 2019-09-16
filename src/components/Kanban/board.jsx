import { Row, boardData } from './';

import PropTypes from 'prop-types';
import React from 'react';

const Board = ({
  tasks, onTaskMove, onTaskDelete, rowWithNewTask, error, loading,
}) => (
  <div className="board">
    <div className="board-list">
      {error || boardData.map(row => (
        <Row
          loading={loading}
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

Board.defaultProps = {
  error: null,
  tasks: [{}],
};

Board.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    body: PropTypes.string,
    taskState: PropTypes.number,
    priority: PropTypes.string,
    createdAt: PropTypes.string,
    deadline: PropTypes.string,
  })),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  rowWithNewTask: PropTypes.number.isRequired,
  onTaskMove: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export { Board };
