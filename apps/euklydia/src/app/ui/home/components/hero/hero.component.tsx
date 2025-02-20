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
  const card3Ref = useRef<HTMLDivElement>(null);
  const card4Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFirefox()) {
      // Disable all animations in Firefox
      return;
    }
    // const mm = gsap.matchMedia();

    // mm.add('(min-width: 960px)', () => {
    //   // Animate card-2 and card-4 when section comes into view
    //   ScrollTrigger.create({
    //     trigger: sectionRef.current,
    //     start: 'top center',
    //     end: 'bottom center',
    //     scrub: 2,
    //     // markers: true,
    //     onEnter: () => {
    //       gsap.to(card2Ref.current, {
    //         position: 'fixed',
    //         left: '-0%',
    //         bottom: '10%',
    //         duration: 0.5,
    //         ease: 'power2.out',
    //       });

    //       gsap.to(card3Ref.current, {
    //         position: 'fixed',
    //         bottom: '10%',
    //         right: '-0%',
    //         duration: 0.5,
    //         ease: 'power2.out',
    //         delay: 0,
    //       });

    //       gsap.to(card4Ref.current, {
    //         position: 'fixed',
    //         left: '-0%',
    //         bottom: '10%',
    //         duration: 0.5,
    //         ease: 'power2.out',
    //         delay: 0,
    //       });
    //     },
    //     onLeaveBack: () => {
    //       gsap.to([card2Ref.current, card3Ref.current, card4Ref.current], {
    //         position: 'relative',
    //         left: 'auto',
    //         duration: 0.3,
    //         overwrite: 'auto',
    //       });
    //     },
    //   });
    // });

    // return () => {
    //   mm.revert();
    //   ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    // };
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
            <div key={pillar.id}>
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
                  <div className={`content content-${index + 1}`}>
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
            </div>
          ))}
        </div>

        {/* Visual Wrapper */}
        {!isFirefox() && (
          <div className="visual">
            <div className="card-wrapper">
              {pillars2.map((pillar, index) => {
                if (pillar.id === 2) {
                  return (
                    <div
                      key={pillar.id}
                      ref={card2Ref}
                      className={`card card-${pillar.id}`}
                      style={{
                        left: '-0%',
                        bottom: '10%',
                      }}
                    >
                      <img
                        className="card-img"
                        src={pillar.image}
                        alt={pillar.alt}
                      />
                    </div>
                  );
                }
                if (pillar.id === 3) {
                  return (
                    <div
                      key={pillar.id}
                      ref={card3Ref}
                      className={`card card-${pillar.id}`}
                      style={{
                        bottom: '10%',
                        right: '-0%',
                      }}
                    >
                      <img
                        className="card-img"
                        src={pillar.image}
                        alt={pillar.alt}
                      />
                    </div>
                  );
                }
                if (pillar.id === 4) {
                  return (
                    <div
                      key={pillar.id}
                      ref={card4Ref}
                      className={`card card-${pillar.id}`}
                      style={{
                        left: '-0%',
                        bottom: '10%',
                      }}
                    >
                      <img
                        className="card-img"
                        src={pillar.image}
                        alt={pillar.alt}
                      />
                    </div>
                  );
                }

                return (
                  <div
                    key={pillar.id}
                    className={`card card-${pillar.id} ${
                      index % 2 === 0 ? 'card-left' : 'card-right'
                    }`}
                  >
                    <img
                      className="card-img"
                      src={pillar.image}
                      alt={pillar.alt}
                    />
                    {/* {pillar.image} */}
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
