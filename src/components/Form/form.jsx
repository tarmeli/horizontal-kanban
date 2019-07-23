import PropTypes from 'prop-types';
import React from 'react';
import { Input, formData } from './';

const Form = ({ onSubmitTask }) => (
  <div className="form">
    <h1>Add a new task</h1>
    <form onSubmit={onSubmitTask}>
      {formData.map(input => (
        <Input
          {...input}
        />
      ))}
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
