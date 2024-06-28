import React, { useContext } from 'react';
import { MenuContext } from './MenuContext';

const HomePage = () => {
  const { items } = useContext(MenuContext);

  return (
    <div>
      <h1>Welcome to Snack or Booze</h1>
      <p>We have {items.snacks.length} snacks and {items.drinks.length} drinks available.</p>
    </div>
  );
};

export default HomePage;
