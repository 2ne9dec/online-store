import React from 'react';
import { generateId } from '../../helpers/helpers';
import './Features.scss';

const features = [
  {
    title: 'Free Shipping',
    description: 'Orders over $100',
    iconClass: '_icon-car',
  },
  {
    title: 'Smart Gift Card',
    description: 'Buy $1000 to get card',
    iconClass: '_icon-gift',
  },
  {
    title: 'Quick Payment',
    description: '100% secure payment',
    iconClass: '_icon-wallet',
  },
  {
    title: '24/7 Support',
    description: 'Quick support',
    iconClass: '_icon-headphones',
  },
];

const Features = () => {
  return (
    <section className='features'>
      <div className='features__container  _container'>
        {features &&
          features.map(({ title, description, iconClass }) => (
            <div className='features__items' key={generateId()}>
              <p className={`features__items-icon ${iconClass}`}></p>
              <div className='feateres__items-body body-features'>
                <div className='body-features-title'>
                  {title}
                </div>
                <div className='body-features-description'>
                  {description}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Features;
