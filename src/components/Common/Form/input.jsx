import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeholder,
  className,
  type,
  name,
  id,
  required,
  onFocus,
  onBlur,
  inputType,
}) => (
  inputType === 'textarea' ?
    <textarea
      className={className}
      type={type}
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
    :
    <input
      className={className}
      type={type}
      name={name}
      id={id}
      required={required}
      placeholder={placeholder}
      onFocus={onFocus}
      onBlur={onBlur}
    />
);

Input.defaultProps = {
  placeholder: '',
  onFocus: null,
  onBlur: null,
};

Input.propTypes = {
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export { Input };
