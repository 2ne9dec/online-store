import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className='header'>
      <section className='header__top top-header'>
        <div className='top-header__container _container'>
          <span className='top-header__welcome'>Welcome to our online shop</span>
          <div className='top-header__main'>
            <div className='top-header__main-currency currency'>
              <span className='currency__text'>English (USD)</span>
              <button type='button' className='currency__arrow _icon-arrowDown' />
              <ul className='currency__list'>
                <li>$</li>
                <li>$</li>
              </ul>
            </div>
            <Link to={'/login'} className='top-header__main-user'>
              Login or Sign up
            </Link>
          </div>
        </div>
      </section>

      <section className='header__body body-header'>
        <div className='body-header__container _container'>
          <Link to={'/'} className='body-header__logo _icon-logo'>
            <p className='body-header__logo-text'>Furniking</p>
          </Link>
          <div className='body-header__search'>
            <form className='search-header'>
              <input
                type='text'
                autoComplete='off'
                value={searchValue}
                className='search-header__input'
                placeholder='Search here'
                onChange={changeSearchValue}
              />
              <div className='search-header__category '>
                <span>Categories</span>
                <ul className='search-header__category-list'>
                  <li>1</li>
                  <li>2</li>
                </ul>
                <button type='button' className=' search-header__category-btn _icon-arrowDown' />
              </div>
              <button type='button' className='search-header__button _icon-search' />
            </form>
          </div>
          <div className='body-header__actions'>
            <div className='body-header__actions-cart _icon-cart'>
              <span>0</span>
            </div>
            <div className='body-header__actions-bell _icon-bell'></div>
            <div className='body-header__actions-user _icon-user'></div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
