import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedCategories from '../components/home/FeaturedCategories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <HowItWorks />
      <Testimonials />
    </>
  );
};

export default Home;