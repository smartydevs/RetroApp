import React from 'react';
import AndroidButton from './AndroidButton';
import AppleButton from './AppleButton';

const HeroSection = () => {
  return (
    <div className="cc-home--hero">
      <h1 className="cc-home--hero_title">
        <span className="dark-text">Retr</span>
        <span className="primaryPink-text">Up</span>
      </h1>
      <p className="cc-home--hero_action">
        Join local groups to meet people, try something new, or do more of what you love
        with your friends, in a <span className="primaryPink-text">retro</span> style
      </p>
      <div className="cc-home--hero_buttons">
        <AndroidButton />
        <AppleButton
          style={{
            marginTop: '25px',
          }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
