import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Logout = ({ setToken }) => {
  useEffect(() => {
    localStorage.setItem('token', '');
    setToken(null);
  }, [setToken]);

  return (
    <div>
      <h2>logged out</h2>
    </div>
  );
};

Logout.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export { Logout };
