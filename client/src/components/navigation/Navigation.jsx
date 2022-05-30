import React, { useState } from 'react';
import { generateId } from '../../helpers/helpers';
import './Navigations.scss';

const Navigation = () => {
  const [navItems, setNavItems] = useState([
    'All',
    'New Arrivals',
    'Hot Sale',
    'Furniture',
    'Dresser',
    'Table',
    'Chair',
    'Sofa',
    'Mirrors',
    'Stools',
    'Benches',
  ]);

  return (
    <nav className='nav'>
      <ul className='nav__list'>
        {navItems &&
          navItems.map((navItem) => (
            <li className='nav__list-item' key={generateId()}>
              {navItem}
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Navigation;
