import React from 'react';

const Rating = () => {
  return (
    <div className='body-products__rating rating rating_set'>
      <div className='rating__body'>
        <div className='rating__active'></div>
        <div className='rating__items'>
          <input type='radio' className='rating__item' value='1' name='rating' />
          <input type='radio' className='rating__item' value='2' name='rating' />
          <input type='radio' className='rating__item' value='3' name='rating' />
          <input type='radio' className='rating__item' value='4' name='rating' />
          <input type='radio' className='rating__item' value='5' name='rating' />
        </div>
      </div>
      <div className='rating__value'>3.6</div>
    </div>
  );
};

export default Rating;
