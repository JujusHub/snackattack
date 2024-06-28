import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ item, type }) => (
  <li>
    <Link to={`/${type}/${item.id}`}>{item.name}</Link>
  </li>
);

export default MenuItem;
