import React, { useEffect, useRef } from 'react';
import './firefox-hero.styles.css';
import { pillars2 } from '../../../../../data/home/pillars.data';
import { Button } from '@euklydia/components';
const isFirefox = () => navigator.userAgent.toLowerCase().includes('firefox');
const FirefoxHeroSection = () => {
  useEffect(() => {
    if (isFirefox()) {
      // Disable all animations in Firefox
      return;
    }
  }, []);
  return (
    <div className="firefox-section-pillars">
      <div className={`firefox-section-wrapper`}>
        {/* Content Wrapper */}
        <div className={`firefox-wrapper`}>
          {pillars2.map((pillar) => (
            <React.Fragment key={pillar.id}>
              <div className="firefox-content">
                <div className="image-container">
                  <div className="mobile-visual">
                    <img src={pillar.image} alt="" />
                  </div>
                  <div className="desktop-visual">
                    <img className="firefox-image" src={pillar.image} alt="" />
                  </div>
                </div>
                <div className="meta">
                  <h1 className="title">
                    <span> {pillar.title}</span>
                  </h1>
                  <h2 className="subtitle">{pillar.subtitle}</h2>
                  <p className="description">{pillar.description}</p>
                  <div className="button-container">
                    <Button text={pillar.button || ''} />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* <DataMuse className="card-img image-1 image-fixed" /> */}
    </div>
  );
};

export default FirefoxHeroSection;
