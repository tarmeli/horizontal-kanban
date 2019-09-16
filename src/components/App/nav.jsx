import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

const Nav = ({ token }) => (
  <div className="container container__navbar">
    <nav className="navbar">
      {
        token ?
          <>
            <NavLink exact to="/" className="navbar__item" activeClassName="navbar__item--active">
              tasks
            </NavLink>

            <NavLink to="/add-new-task" className="navbar__item" activeClassName="navbar__item--active">
              new task
            </NavLink>

            <NavLink to="/logout" className="navbar__item">
              logout
            </NavLink>
          </>
        :
          <>
            <NavLink exact to="/" className="navbar__item" activeClassName="navbar__item--active">
              login
            </NavLink>

            <NavLink to="/register" className="navbar__item" activeClassName="navbar__item--active">
              register
            </NavLink>
          </>
      }
    </nav>
  </div>
);

Nav.defaultProps = {
  token: null,
};

Nav.propTypes = {
  token: PropTypes.string,
};

export { Nav };
