import PropTypes from 'prop-types';
import React from 'react';

const Form = ({ onSubmitTask }) => (
  <div className="form">
    <h1>Add a new task</h1>
    <form onSubmit={onSubmitTask}>
      <input
        placeholder="Task Name*"
        className="form__control form__control--text"
        type="text"
        name="name"
        id="name"
        required
      />

      <input
        placeholder="Priority 0-9*"
        className="form__control form__control--number"
        type="number"
        name="priority"
        id="priority"
        min="0"
        max="9"
        required
      />

      <input
        type="text"
        className="form__control form__control--date"
        name="deadline"
        id="deadline"
        onFocus={(e) => {
          e.target.type = 'date';
        }}
        onBlur={(e) => {
          e.target.type = 'text';
        }}
        placeholder="Deadline"
      />

      <textarea
        placeholder="Task Description*"
        className="form__control form__control--textarea"
        type="text"
        name="body"
        id="body"
        required
      />

      <input className="button button--wide" type="submit" value="Submit" />

      <div className="form__required-text">
        * required field
      </div>

    </form>
  </div>
);

Form.propTypes = {
  onSubmitTask: PropTypes.func.isRequired,
};

export { Form };
