import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Logout = ({ setToken }) => {
  useEffect(() => {
    localStorage.setItem('token', '');
    setToken(null);
  }, [setToken]);

  return (
    <div className="logout logout__container">
      <h2>You have been logged out</h2>
    </div>
  );
};

Logout.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export { Logout };
