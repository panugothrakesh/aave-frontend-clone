import React, { useEffect, useRef } from 'react'
import "../../../custom_css/eyes.css"

function Logo() {

  const ellipseRef = useRef<HTMLDivElement>(null);
  const ellipseRef2 = useRef<HTMLDivElement>(null);
  let timeoutId: ReturnType<typeof setTimeout> | undefined; // Store timeout ID

  useEffect(() => {
    const element = ellipseRef.current;

    if (!element) return;

    const animateBlink = () => {
      element.style.clipPath = 'ellipse(50% 0% at 50% 50%)'; // Close the eye

      setTimeout(() => {
        element.style.clipPath = 'ellipse(50% 50% at 50% 50%)'; // Reopen the eye
      }, 100); // Open after 200ms
    };

    const startBlinkingTwice = () => {
      animateBlink(); // First blink

      setTimeout(() => {
        animateBlink(); // Second blink
      }, 300); // Second blink after 400ms
    };

    const startBlinkingCycle = () => {
      startBlinkingTwice();

      timeoutId = setTimeout(() => {
        startBlinkingCycle(); // Repeat cycle after 5000ms
      }, 5000);
    };

    // Add an initial 6-second delay before starting the first blinking cycle
    setTimeout(() => {
      startBlinkingCycle();
    }, 1400);

    return () => {
      if (timeoutId) clearTimeout(timeoutId); // Clear timeout on component unmount
    };
  }, []);

  // Second eye blinking
  useEffect(() => {
    const element = ellipseRef2.current;

    if (!element) return;

    const animateBlink = () => {
      element.style.clipPath = 'ellipse(50% 0% at 50% 50%)'; // Close the eye

      setTimeout(() => {
        element.style.clipPath = 'ellipse(50% 50% at 50% 50%)'; // Reopen the eye
      }, 100); // Open after 200ms
    };

    const startBlinkingTwice = () => {
      animateBlink(); // First blink

      setTimeout(() => {
        animateBlink(); // Second blink
      }, 300); // Second blink after 400ms
    };

    const startBlinkingCycle = () => {
      startBlinkingTwice();

      timeoutId = setTimeout(() => {
        startBlinkingCycle(); // Repeat cycle after 5000ms
      }, 5000);
    };

    setTimeout(() => {
      startBlinkingCycle();
    }, 1400);

    return () => {
      if (timeoutId) clearTimeout(timeoutId); // Clear timeout on component unmount
    };
  }, []);

  
  return (
    <div className='relative'>
    <svg className=" h-4 w-[94px]" width="94" height="16" viewBox="0 0 833 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M764.174 110.231C746.305 110.231 730.427 97.2842 726.337 79.409H832.43C832.43 79.409 833 72.9322 833 70.641C833 32.7018 802.132 1.82812 764.193 1.82812C726.254 1.82812 695.387 32.6954 695.387 70.641C695.387 108.587 726.081 138.737 764.193 138.737C802.305 138.737 824.558 110.66 830.113 90.3338H797.774C797.774 90.3338 787.489 110.231 764.174 110.231ZM764.193 30.321C781.326 30.321 796.2 41.6362 801.294 58.5002H727.092C732.168 41.6362 747.048 30.321 764.193 30.321Z" fill="#201D1D" style={{fill:"#201D1D", fillOpacity:"1",}} />
        <path d="M359.33 138.737C321.391 138.737 291.631 108.19 291.631 70.641C291.631 33.0922 322.498 1.82812 360.437 1.82812C398.377 1.82812 429.244 33.9114 429.244 70.2762C429.244 85.7706 429.244 135.326 429.244 135.326H402.53V113.617L400.585 113.105C395.881 124.638 378.837 138.737 359.324 138.737H359.33ZM360.437 30.321C339.01 30.321 321.57 48.3114 321.57 70.4298C321.57 92.5482 339.004 110.238 360.437 110.238C381.871 110.238 399.305 92.3818 399.305 70.4298C399.305 48.4778 381.871 30.321 360.437 30.321Z" fill="#201D1D" style={{fill:"#201D1D", fillOpacity:"1",}} />
        <path d="M505.473 138.737C467.533 138.737 437.773 108.19 437.773 70.641C437.773 33.0922 468.641 1.82812 506.58 1.82812C544.519 1.82812 575.386 33.9114 575.386 70.2762C575.386 85.7706 575.386 135.326 575.386 135.326H548.673V113.617L546.727 113.105C542.023 124.638 524.98 138.737 505.466 138.737H505.473ZM506.58 30.321C485.153 30.321 467.713 48.3114 467.713 70.4298C467.713 92.5482 485.146 110.238 506.58 110.238C528.014 110.238 545.447 92.3818 545.447 70.4298C545.447 48.4778 528.014 30.321 506.58 30.321Z" fill="#201D1D" style={{fill:"#201D1D", fillOpacity:"1",}} />
        <path d="M620.231 135.311L565.402 5.25H595.399L635.585 101.058L675.777 5.25H705.767L650.945 135.311H620.231Z" fill="#201D1D" style={{fill:"#201D1D", fillOpacity:"1",}} />
        <path d="M132.8 0C59.4497 0 -0.0191954 60.6017 4.64786e-06 135.335H33.9264C33.9264 79.3281 77.8433 33.92 132.8 33.92C187.757 33.92 231.674 79.3281 231.674 135.335H265.6C265.613 60.6017 206.144 0 132.8 0Z" fill="#201D1D" style={{fill:"#201D1D", fillOpacity:"1",}} />
    </svg>
    <div className="eye-movement absolute flex justify-center items-center">
          <div ref={ellipseRef} className="morphing-ellipse top-0 left-0"></div>
          <div ref={ellipseRef2} className="morphing-ellipse2 top-0 left-0"></div>
      </div>
    </div>
  )
}

export default Logo