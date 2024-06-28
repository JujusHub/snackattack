import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/snacks">Snacks</Link>
    <Link to="/drinks">Drinks</Link>
    <Link to="/add-item">Add Item</Link>
  </nav>
);

export default Navbar;
