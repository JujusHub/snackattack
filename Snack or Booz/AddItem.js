import React, { useState, useContext } from 'react';
import { MenuContext } from './MenuContext';

const AddItemForm = () => {
  const { items, setItems } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [type, setType] = useState('snacks');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: Date.now(), name };
    setItems({
      ...items,
      [type]: [...items[type], newItem],
    });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Type:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="snacks">Snack</option>
          <option value="drinks">Drink</option>
        </select>
      </label>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;
