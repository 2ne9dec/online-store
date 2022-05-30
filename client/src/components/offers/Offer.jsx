import React from 'react';
import { generateId } from '../../helpers/helpers';
import { images } from '../../constants/images';
import './Offer.scss';

const offers = [
  {
    image: images.offer1,
    title: 'Modern Furniture Collections',
    description: 'Starting from $500',
    readMore: 'Read More',
  },
  {
    image: images.offer2,
    title: 'Geometric Bookcase',
    description: 'Up to 20% discount',
    readMore: 'Read More',
  },
  {
    image: images.offer3,
    title: 'Minimal Sofa collections ',
    description: 'Sale upto 40% discount',
    readMore: 'Read More',
  },
];

const Offer = () => {
  return (
    <section className='offer'>
      <div className='offer__container _container'>
        <div className='offer__items'>
          {offers &&
            offers.map(({ image, title, description, readMore }) => (
              <div className='offer__items-block block' key={generateId()}>
                <img className='block__image' src={image} alt={title} />
                <div className='block__offer'>
                  <h2 className='block__offer-title'>{title}</h2>
                  <p className='block__offer-description'>{description}</p>
                  <a href='' className='block__offer-readMore '>
                    {readMore}
                    <span className='_icon-arrowRight'></span>
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
