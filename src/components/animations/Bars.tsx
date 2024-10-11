import Bar from '@/assets/svg_components/Hero/Bar';
import React, { useState, useRef } from 'react';

function Bars() {
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
  const maskRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const maskRect = maskRef.current?.getBoundingClientRect();
    if (!maskRect) return;

    const { clientX } = e;
    const sectionWidth = maskRect.width / 6;
    const adjustedX = clientX - maskRect.left;

    const part = Math.floor(adjustedX / sectionWidth);

    if (part >= 0 && part < 6) {
      setHoveredBar(part);
    } else {
      setHoveredBar(null);
    }
  };

  const handleMouseLeave = () => {
    setHoveredBar(null);
  };

  return (
    <div className="relative animate-see">
      <div
        className="block overflow-visible -mt-[110px] mb-0 mx-auto px-12 w-full max-w-[1082px]"
        ref={maskRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          clipPath: 'inset(-1000px 0px 0px -100px)',
          width: '986px',
          height: '438px',
          position: 'relative',
          overflow: 'hidden',
          background: '#fff',
        }}
      >
        <div className='flex w-[985px] h-[438px] -translate-x-[48px]'>
          <Bar
            className="bar1 animate-bar1 translate-y-[440px]"
            color1="color(display-p3 0.4196 0.8078 0.9608)"
            color2="color(display-p3 0.7098 0.9059 0.9804)"
            rectColor="#D9F7FF"
            hovered={hoveredBar === 0}
          />
          <Bar
            className="bar2 animate-bar2 translate-y-[450px]"
            color1="color(display-p3 1 0.72 0)"
            color2="color(display-p3 1 0.8392 0.1922)"
            rectColor="#FFF7A5"
            hovered={hoveredBar === 1}
          />
          <Bar
            className="bar3 animate-bar3 translate-y-[480px]"
            color1="color(display-p3 0.121 0.5025 0.4806)"
            color2="color(display-p3 0.3882 0.7333 0.7137)"
            rectColor="#83EEE8"
            hovered={hoveredBar === 2}
          />
          <Bar
            className="bar4 animate-bar4 translate-y-[500px]"
            color1="color(display-p3 0.102 0.5333 0.9725)"
            color2="color(display-p3 0.2824 0.6706 1)"
            rectColor="#96E9FF"
            hovered={hoveredBar === 3}
          />
          <Bar
            className="bar5 animate-bar5 translate-y-[550px]"
            color1="color(display-p3 0.9490 0.2863 0.0000)"
            color2="color(display-p3 1.0000 0.5373 0.2784)"
            rectColor="#FFC693"
            hovered={hoveredBar === 4}
          />
          <Bar
            className="bar6 animate-bar6 translate-y-[610px]"
            color1="color(display-p3 0.5951 0.587 1)"
            color2="color(display-p3 0.7391 0.7337 1)"
            rectColor="#E2E0FF"
            hovered={hoveredBar === 5}
          />
        </div>
      </div>
    </div>
  );
}

export default Bars;