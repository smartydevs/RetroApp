import React from 'react';

import dancingPeople from '../../assets/dancing-people.png';
import HeroSection from './components/HeroSection';
import './style.scss';

const Home = () => {
  return (
    <div className="cc-home">
      <HeroSection />
      <div className="cc-home--image-container">
        <img alt="Dancing People" src={dancingPeople} className="cc-home--image" />
      </div>
    </div>
  );
};

export default Home;
