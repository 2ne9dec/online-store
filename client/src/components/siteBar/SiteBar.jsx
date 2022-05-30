import React, { useState } from 'react';
import { generateId } from '../../helpers/helpers';
import './SiteBar.scss';

const SiteBar = () => {
  const [siteBarItems, setSiteBarItems] = useState(['home', 'shop', 'blog', 'about', 'contact us']);

  return (
    <nav className='siteBar'>
      <ul className='siteBar__list'>
        {siteBarItems &&
          siteBarItems.map((navItem) => (
            <li className='siteBar__list-item' key={generateId()}>
              {navItem}
            </li>
          ))}
      </ul>
    </nav>
    
  );
};

export default SiteBar;
