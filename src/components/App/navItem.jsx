import React from 'react';
import PropTypes from 'prop-types';

const NavItem = ({ title, isActive, handleClick }) => (

  <button
    className={`navbar__item${isActive ? ' navbar__item--active' : ''}`}
    onClick={handleClick}
  >
    {title}
  </button>
);

NavItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export { NavItem };
