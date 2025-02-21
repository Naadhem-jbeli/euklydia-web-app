import React, { useEffect, useRef } from 'react';
import './hero.styles.css';
import { pillars2 } from '../../../../data/home/pillars.data';
import { Button } from '@euklydia/components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const isFirefox = () => navigator.userAgent.toLowerCase().includes('firefox');
gsap.registerPlugin(ScrollTrigger);
const HeroSection = () => {
  const card2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirefox()) {
      // Disable all animations in Firefox
      return;
    }
  }, []);
  return (
    <div ref={sectionRef} className="section-pillars">
      <div
        className={`${
          isFirefox() ? 'firefox-section-wrapper' : 'section-wrapper'
        }`}
      >
        {/* Content Wrapper */}
        <div
          className={`${isFirefox() ? 'firefox-wrapper' : 'content-wrapper'}`}
        >
          {pillars2.map((pillar, index) => (
            <React.Fragment key={pillar.id}>
              <>
                {isFirefox() ? (
                  <div className="firefox-content">
                    <div className="image-container">
                      <div className="mobile-visual">
                        <img src={pillar.image} alt="" />
                      </div>
                      <div className="desktop-visual">
                        <img
                          className="firefox-image"
                          src={pillar.image}
                          alt=""
                        />
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
                ) : (
                  <div
                    className={`content content-${index + 1}`}
                    style={{ zIndex: 30 }}
                  >
                    <div className="mobile-visual">
                      <img src={pillar.image} alt="" />
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
                )}
              </>
            </React.Fragment>
          ))}
        </div>

        {/* Visual Wrapper */}
        {!isFirefox() && (
          <div className="visual">
            <div className="card-wrapper">
              {pillars2.map((pillar, index) => {
                return (
                  <div
                    key={pillar.id}
                    ref={card2Ref}
                    className={`card card-${pillar.id}`}
                    style={
                      pillar.id === 2
                        ? {
                            left: '15%',
                            bottom: '0%',
                          }
                        : pillar.id === 3
                        ? {
                            bottom: '0%',
                            right: '18%',
                          }
                        : pillar.id === 4
                        ? {
                            left: '15%',
                            bottom: '0%',
                          }
                        : {}
                    }
                  >
                    <img
                      className="card-img"
                      src={pillar.image}
                      alt={pillar.alt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {/* <DataMuse className="card-img image-1 image-fixed" /> */}
    </div>
  );
};

export default HeroSection;
