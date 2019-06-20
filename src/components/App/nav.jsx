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

    </nav>
  </div>
);

export { Nav };
