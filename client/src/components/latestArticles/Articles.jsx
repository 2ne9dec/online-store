import React from 'react';
import { generateId } from '../../helpers/helpers';
import { images } from '../../constants/images';
import './Articles.scss';

const articles = [
  {
    image: images.card1,
    title: 'Begineer guide buying minimal sofa',
    label: 'Furniture',
    readMore: 'Read More',
  },
  {
    image: images.card2,
    title: 'Buying best minimal computer table',
    label: 'TABLE',
    readMore: 'Read More',
  },
  {
    image: images.card3,
    title: 'How to choose best modern bench',
    label: 'Bench',
    readMore: 'Read More',
  },
  {
    image: images.card4,
    title: 'Best Summer Outfit Style in this Country',
    label: 'Chair',
    readMore: 'Read More',
  },
];

const Articles = () => {
  return (
    <section className='articles'>
      <div className='articles__container _container'>
        <h2 className='_title'>Our Latest Articles</h2>
        <div className='articles__items'>
          {articles &&
            articles.map(({ image, title, label, readMore }) => (
              <div key={generateId()} className='articles__items-block block'>
                <img src={image} className='block__image' alt='image' />
                <div className='block__body'>
                  <div className='block__body-info info'>
                    <div className='info__label _icon-label'>{label}</div>
                    <span className='info__date'>23 march 2022</span>
                  </div>
                  <h2 className='block__body-title'>{title}</h2>
                  <a href='' className='block__body-readMore '>
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

export default Articles;
