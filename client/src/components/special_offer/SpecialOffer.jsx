import React from 'react';
import { generateId } from '../../helpers/helpers';
import { images } from '../../constants/images';
import './SpecialOffer.scss';

const specialOffers = [
  {
    image: images.specialOffer1,
    title: 'Modern Furniture Collections',
    description: `You don't have a chair. Are you ready for growth? Shop with us 40% discount!`,
    sale: '40% off',
    newPrice: '$150',
    oldPrice: '$250',
  },
  {
    image: images.specialOffer2,
    title: 'Geometric Bookcase',
    description: `Hot chairs of the modern era are now available in our stock.`,
    sale: '50% off',
    newPrice: '$75',
    oldPrice: '$150',
  },
];

const SpecialOffer = () => {
  return (
    <section className='specialOffer'>
      <div className='specialOffer__container _container'>
        <h2 className='_title'>Special offer</h2>
        <div className='specialOffer__items'>
          {specialOffers &&
            specialOffers.map(({ image, title, description, sale, newPrice, oldPrice }) => (
              <div className='specialOffer__items-block block' key={generateId()}>
                <img src={image} className='block__image' alt='image' />
                <span className='block__sale'>{sale}</span>
                <div className='block__wrapper'>
                  <h2 className='block__wrapper-title'>{title}</h2>
                  <p className='block__wrapper-description'>{description}</p>
                  <div className='block__wrapper-price price'>
                    <div className='price__wrapper'>
                      <span className='price__wrapper-newPrice'>{newPrice}</span>
                      <span className='price__wrapper-oldPrice'>{oldPrice}</span>
                    </div>
                    <button type='button' className='price__btn'>
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
