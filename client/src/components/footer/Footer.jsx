import React from 'react';
import { generateId } from '../../helpers/helpers';
import './Footer.scss';

const socials = ['_icon-facebook', '_icon-twitter', '_icon-instagram', '_icon-pinterest'];

const items = [
  {
    title: 'Help',
    items: ['Privacy Policy', 'Shipping & Delivery', 'Refund Policy', 'Track Your  Order'],
  },
  {
    title: 'Store',
    items: ['Furniture', 'Table', 'Sofa', 'Other'],
  },
  {
    title: 'Supports',
    items: ['Feedback', 'Contact us', 'Download app', 'Terms conditins'],
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__top top-footer'>
        <div className='top-footer__container _container'>
          <div className='top-footer__adress adress'>
            <div className='adress__logo _icon-logo'>
              <p className='adress__logo-text'>Furniking</p>
            </div>
            <div className='adress__text'>
              Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor
            </div>
            <div className='adress__socials'>
              {socials &&
                socials.map((social) => (
                  <span key={generateId()} className={`adress__socials-item ${social}`}></span>
                ))}
            </div>
          </div>

          <div className='top-footer__items'>
            {items &&
              items.map(({ title, items }) => (
                <div key={generateId()} className='top-footer__items-body body'>
                  <h2 className='body__title'>{title}</h2>
                  {items &&
                    items.map((item) => (
                      <span key={generateId()} className='body__item'>
                        {item}
                      </span>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className='footer__bottom bottom'>
        <div className='bottom__container _container'>
          <span className='footer__bottom-text'>© 2021 Funking - All rights reserved.</span>
          <ul className='footer__bottom-body body'>
            <li className='body__item'>Privacy</li>
            <li className='body__item'>Security</li>
            <li className='body__item'>Terms</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
