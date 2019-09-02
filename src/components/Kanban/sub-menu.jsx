import React from 'react';
import PropTypes from 'prop-types';

const SubMenu = ({ data, action, id }) => (
  <ul className="sub-menu">
    {data.map(row => (
      <li key={row.id} className="sub-menu__item">
        <input
          type="button"
          value={row.title}
          onClick={event => action(event, row.id, id)}
        />
      </li>))}
  </ul>
);

SubMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
  action: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export { SubMenu };
