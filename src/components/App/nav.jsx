import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { NavItem } from './';

const Nav = () => {
  const [activeButton, setActiveButton] = useState('tasks');

  return (
    <div className="container container__navbar">
      <nav className="navbar">
        <Link to="/">
          <NavItem
            title="tasks"
            isActive={activeButton === 'tasks'}
            handleClick={() => setActiveButton('tasks')}
          />
        </Link>
        <Link to="/Add">
          <NavItem
            title="add"
            isActive={activeButton === 'add'}
            handleClick={() => setActiveButton('add')}
          />
        </Link>
      </nav>
    </div>
  );
};

export { Nav };
