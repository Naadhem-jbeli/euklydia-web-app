import React, { useEffect, useRef } from 'react';
import './hero.styles.css';
import { pillars2 } from '../../../../data/home/pillars.data';
import { Button } from '@euklydia/components';
import FirefoxHeroSection from './firefox-hero/firefox-hero.component';
const isFirefox = () => navigator.userAgent.toLowerCase().includes('firefox');
const HeroSection = () => {
  return (
    <>
      {isFirefox() ? (
        <FirefoxHeroSection />
      ) : (
        <div className="section-pillars">
          <div className={'section-wrapper'}>
            {/* Content Wrapper */}
            <div className="content-wrapper">
              {pillars2.map((pillar) => (
                <div key={pillar.id}
                        className={`content content-${pillar.id}`}
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
              ))}
            </div>

            {/* Visual Wrapper */}
            <div className="visual">
              <div className="card-wrapper">
                {pillars2.map((pillar, index) => {
                  return (
                    <div
                      key={pillar.id}
                      className={`card card-${pillar.id}`}
                      style={
                        pillar.id === 2
                          ? {
                              left: '18%',
                              bottom: '-3%',
                            }
                          : pillar.id === 3
                          ? {
                              bottom: '-3%',
                              right: '18%',
                            }
                          : pillar.id === 4
                          ? {
                              left: '18%',
                              bottom: '-3%',
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
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
