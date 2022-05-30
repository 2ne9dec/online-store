import React from 'react';
import Collections from '../collections/Collections';
import Features from '../features/Features';
import Articles from '../latestArticles/Articles';
import Offer from '../offers/Offer';
import Products from '../products/Products';
import SpecialOffer from '../special_offer/SpecialOffer';
import Testimonials from '../testimonials/Testimonials';
import Trendings from '../trendings/Trendings';

const Main = () => {
  return (
    <main className='page'>
      <Collections />
      <Features />
      <Offer />
      <Trendings />
      <SpecialOffer />
      <Products />
      <Testimonials />
      <Articles />
    </main>
  );
};

export default Main;
