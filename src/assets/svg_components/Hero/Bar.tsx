import React from 'react';

type BarsType = {
  rectColor: string;
  color1: string;
  color2: string;
  className?: string;
};

const Bar: React.FC<BarsType> = ({ rectColor, color1, color2, className }) => {
    return (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="164" height="493" viewBox="0 0 164 493" fill="none">
    <rect x="1" y="1" width="162.16" height="491.35" rx="81.08" fill={rectColor} />
    <path
      d="M163.08 82C163.08 126.779 126.779 163.08 82 163.08V0.919983C126.779 0.919983 163.08 37.2207 163.08 82Z"
      fill={color1}
    />
    <path
      d="M0.919922 82C0.919922 37.2208 37.2205 0.920074 81.9999 0.920074V163.08C37.2205 163.08 0.919922 126.779 0.919922 82Z"
      fill={color2}
    />
    <path
      d="M122.54 82C122.54 104.389 104.389 122.54 82 122.54V41.46C104.389 41.46 122.54 59.6106 122.54 82Z"
      fill={color2}
    />
    <path
      d="M41.46 82C41.46 59.6106 59.6105 41.46 82 41.46V122.54C59.6105 122.54 41.46 104.389 41.46 82Z"
      fill={color1}
    />
  </svg>
    )
};

export default Bar;
