import React from 'react';
import Navigation from '../navigation/Navigation';
import SiteBar from '../siteBar/SiteBar';
import { images } from '../../constants/images';
import { generateId } from '../../helpers/helpers';
import './Collections.scss';

const furnitures = [
  {
    name: 'Office Desk Chair',
    price: '120',
    image: images.chair2,
  },
  {
    name: 'Home Alisa Sofa',
    price: '180',
    image: images.chair3,
  },
  {
    name: 'Modern Chair',
    price: '250',
    image: images.chair4,
  },
];

const Collections = () => {
  return (
    <section className='collection'>
      <div className='collection__container _container'>
        <div className='collection__menu menu'>
          <div className='menu__header'>
            <span className='menu__header-icon _icon-menu'></span>
            <div className='menu__header-title'>All Collection</div>
          </div>
          <Navigation />
        </div>

        <div className='collection__body'>
          <SiteBar />
          <div className='collection__body-slider slider'>
            <div className='slider__description'>
              <div className='slider__description-title'>Top Collections 2022</div>
              <div className='slider__description-slogan'>We Serve Your Dream Furniture</div>
              <div className='slider__description-sale'>Get 50% off all products</div>
              <button className='slider__description-btn'>Shop Now</button>
            </div>

            <div className='slider__furnitures'>
              <div className='slider__furnitures-activeBlock'>
                <img src={images.chair1} alt='chair' />
              </div>
              <div className='slider__furnitures-block block-furnitures'>
                {furnitures &&
                  furnitures.map(({ name, price, image }) => (
                    <div key={generateId()} className='block-furnitures__item'>
                      <img src={image} className='block-furnitures__item-img' alt='chair' />
                      <div className='block-furnitures__item-price'>
                        <span>$</span>
                        {price}
                      </div>
                      <div className='block-furnitures__item-name'>{name}</div>
                    </div>
                  ))}
              </div>
            </div>

            <div className='slider__dotts'>
              <span></span>
              <span></span>
              <span className='active'></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
