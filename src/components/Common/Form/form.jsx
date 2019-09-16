import PropTypes from 'prop-types';
import React from 'react';
import { Input } from './';

const Form = ({ onSubmit, data, loading }) => (
  <div className="form__container">
    <h1>{data.title}</h1>
    <form className="form" onSubmit={onSubmit}>
      {data.inputs.map(input => (
        <Input
          {...input}
          key={input.id}
          loading={loading}
        />
      ))}
      <div className="form__required-text">
        * required field
      </div>
    </form>
  </div>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    inputs: PropTypes.array.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export { Form };
