import React from 'react';
import { generateId } from '../../helpers/helpers';
import trending from '../../data/Trending';
import './Trendings.scss';

const Trendings = () => {
  return (
    <section className='trending'>
      <div className='trending__container _container'>
        <h2 className='_title'>Trending</h2>
        <ul className='_list'>
          <li className='_list-item active'>Top Products</li>
          <li className='_list-item'>New Arrivals</li>
          <li className='_list-item'>Best Sellers</li>
        </ul>

        <div className='trending__products'>
          {trending &&
            trending.map(({ category, image, name, newPrice, oldPrice, sale, newProduct }) => (
              <article key={generateId()} className='trending__products-item item-products'>
                <img className='item-products__image' src={image} alt='image' />
                <span
                  className={`item-products__sale ${
                    sale ? 'item-products__sale-sale' : 'item-products__sale-new'
                  }`}>
                  {sale ? 'sale' : newProduct ? 'new' : ''}
                </span>
                <div className='item-products__body body-products'>
                  <div className='body-products__category'>{category}</div>
                  <div className='body-products__name'>{name}</div>
                  <div className='body-products__price'>
                    <div className='body-products__price-newPrice'>{newPrice}$</div>
                    <div className='body-products__price-oldPrice'>{oldPrice}$</div>
                  </div>
                </div>
                <div className='item-products__actions actions'>
                  <ul className='actions__body'>
                    <li className='actions__body-link _icon-favorite' />
                    <li className='actions__body-link _icon-addToCart' />
                    <li className='actions__body-link _icon-update' />
                    <li className='actions__body-link _icon-eye' />
                  </ul>
                </div>
              </article>
            ))}
        </div>
      </div>
      <div className='trending__dotts'>
        <span className='trending__dotts-span _icon-circle'></span>
        <span className='trending__dotts-span _icon-circle active'></span>
      </div>
    </section>
  );
};

export default Trendings;
