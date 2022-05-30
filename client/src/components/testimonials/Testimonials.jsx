import React from 'react';
import { images } from '../../constants/images';
import './Testimonials.scss';

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <article className='testimonials__container _container'>
        <h2 className='_title'>What Our Customer Says</h2>
        <article className='testimonials__block'>
          <img src={images.avatar} className='testimonials__block-img' alt='user' />
          <p className='testimonials__block-text'>
            I like Furniking.com and as compared to other company it's polices and customers support
            is very good easy to reach., also many time they unable to delivered. The ultricies are
            pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel
            facilisist amet.
          </p>
          <p className='testimonials__block-name'>Angelina Joly</p>
          <div className='testimonials__arrow'>
            <span className='testimonials__arrow-back _icon-arrowDown' />
            <span className='testimonials__arrow-next _icon-arrowDown' />
          </div>
        </article>
      </article>
    </section>
  );
};

export default Testimonials;
