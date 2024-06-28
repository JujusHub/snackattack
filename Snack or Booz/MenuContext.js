import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [items, setItems] = useState({
    snacks: [
      { id: 1, name: 'Chips' },
      { id: 2, name: 'Cookies' },
    ],
    drinks: [
      { id: 1, name: 'Coke' },
      { id: 2, name: 'Water' },
    ],
  });

  return (
    <MenuContext.Provider value={{ items, setItems }}>
      {children}
    </MenuContext.Provider>
  );
};
