import React, { useEffect, useRef } from 'react';
import './pillars.styles.css';
import { pillars } from '../../../../data/home/pillars.data';
import { ReactComponent as ImageShadow } from '../../../../../assets/icons/green-light-shadow.icon.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@euklydia/components';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Pillars: React.FC = () => {
  // Mutable ref to store all pillar elements
  const pillarRefs = useRef<HTMLDivElement[]>([]);
  pillarRefs.current = [];

  // Callback ref to collect pillar elements
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !pillarRefs.current.includes(el)) {
      pillarRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Loop through each pillar element
    pillarRefs.current.forEach((pillar, index) => {
      // Select the image element inside the pillar

      const image = pillar.querySelector('.image-fixed') as HTMLElement;
      const shadow = pillar.querySelector('.shadow') as HTMLElement;
      if (!image) return;

      // Create a timeline with ScrollTrigger for this pillar/image
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: pillar,
          start: '-50% 10%', // When the pillar enters the center
          end: '50% 10%', // When it leaves the center
          scrub: true, // Smoothly ties timeline progress to scrolling
          // markers: true, // (Remove in production)
          // Toggle between fixed and relative positions:
          //   onEnter: () => gsap.set(image, { position: 'relative' }),
          //   onEnterBack: () => gsap.set(image, { position: 'relative' }),
          //   onLeave: () => gsap.set(image, { position: 'fixed' }),
          //   onLeaveBack: () => gsap.set(image, { position: 'fixed' }),
        },
      });
      // Animate from a starting state to a “fully visible” state...
      tl.from(image, {
        opacity: 0.4,
        position: 'fixed',
        x: 0,
        scale: 0.7,
        ease: 'none',
      })
        .call(() => {
          gsap.set(image, {
            // bottom: 0,
            // left: 0,
          });
        })
        .call(() => {
          gsap.set(image, { position: 'relative' });
        })
        .to(
          image,

          {
            position: 'relative',
            bottom: 0,
            left: 0,
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            ease: 'none',
          },
          '+=.5'
        )
        .to(
          image,
          {
            opacity: 0.4,
            scale: 0.5,
            // x: 0,
            ease: 'none',
            position: 'relative',

            x: 0,
            y: 0,
          },
          '+=1'
        )
        .to(
          shadow,
          {
            opacity: 0,
            // ease: 'none',
          },
          '+=1'
        );
    });
  }, []);

  return (
    <div className="pillars pillars-wrapper">
      {/* <h1 className="title">Nadhem</h1> */}
      {pillars.map((pillar, index: number) => (
        <div
          ref={addToRefs}
          key={pillar.title}
          className={`pillar pillar-${index + 1}`}
        >
          <div className="pillar-content">
            <h2 className="title">{pillar.title}</h2>
            <h3 className="subtitle">{pillar.subtitle}</h3>
            <p className="description">{pillar.description}</p>
            <div className="button-container">
              <Button text={pillar.button || ''} />
            </div>
          </div>
          {/* The image gets both the generic "pillar-image" class and a specific image class */}
          <div className={`pillar-image`}>
            {/* <ImageShadow className="shadow" /> */}
            {pillar.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pillars;
