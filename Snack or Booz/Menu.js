import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import { MenuContext } from './MenuContext';
import { Redirect } from 'react-router-dom';

const Menu = ({ type }) => {
  const { items } = useContext(MenuContext);

  if (!items[type]) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h2>{type === 'snacks' ? 'Snacks' : 'Drinks'}</h2>
      <ul>
        {items[type].map(item => (
          <MenuItem key={item.id} item={item} type={type} />
        ))}
      </ul>
    </div>
  );
};

export default Menu;
