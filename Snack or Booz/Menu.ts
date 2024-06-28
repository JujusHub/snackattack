import React, { useContext } from 'react';
import MenuItem from './MenuItem';
import { MenuContext } from './MenuContext';

const Menu = ({ type }) => {
  const { items } = useContext(MenuContext);

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
