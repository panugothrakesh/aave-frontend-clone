import React from 'react';
import Bars from '../animations/Bars';

const ParentComponent = () => {
 return (
    <div className="relative w-full h-[438px] z-0">
      <Bars />
      <div className='w-full h-1 flex items-center justify-center'>
            <div className='bg-colorful-bar animate-width_height_reveal max-w-[1082px] h-1 rounded-full'></div>
        </div>
    </div>
  );
};

export default ParentComponent;