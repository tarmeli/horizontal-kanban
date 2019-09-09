import { NavLink } from 'react-router-dom';
import React from 'react';

const Nav = () => (
  <div className="container container__navbar">
    <nav className="navbar">
      <NavLink exact to="/" className="navbar__item" activeClassName="navbar__item--active">
          tasks
      </NavLink>

      <NavLink to="/add-new-task" className="navbar__item" activeClassName="navbar__item--active">
          new task
      </NavLink>

      <NavLink to="/login" className="navbar__item" activeClassName="navbar__item--active">
          login
      </NavLink>

      <NavLink to="/register" className="navbar__item" activeClassName="navbar__item--active">
          register
      </NavLink>

    </nav>
  </div>
);

export { Nav };
