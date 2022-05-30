import React from 'react';
import { generateId } from '../../helpers/helpers';
import products from '../../data/Products';
import './Products.scss';

const Products = () => {
  return (
    <section className='productSection'>
      <div className='productSection__container _container'>
        <h2 className='_title'>Our Products</h2>
        <ul className='_list'>
          <li className='_list-item active'>All Products</li>
          <li className='_list-item'>Best Sellers</li>
          <li className='_list-item'>New Arrivals</li>
          <li className='_list-item'>Todays Deals</li>
        </ul>

        <div className='productSection__products'>
          {products &&
            products.map(({ category, image, name, newPrice, oldPrice, sale, currentSale }) => (
              <article key={generateId()} className='productSection__products-item item-products'>
                <img className='item-products__image' src={image} alt='image' />
                <span
                  className={`item-products__sale ${
                    sale ? 'item-products__sale-sale' : 'item-products__sale-new'
                  }`}>
                  {currentSale ? currentSale : sale ? 'sale' : 'new'}
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

        <div className='productSection__nextPage nextPage'>
          <div className='nextPage__container'>
            <button type='button' className='nextPage__btn _icon-arrowRight'>
              Next page
            </button>
            <div className='nextPage__pages'>
              <span className='nextPage__pages-text'>Page</span>
              <div className='nextPage__pages-block block'>
                <span className='block__item'>1</span>
                <span className='block__list'>of 100</span>
                <div className='block__arrow'>
                  <span className='block__arrow-back _icon-arrowDown' />
                  <span className='block__arrow-next _icon-arrowDown' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
