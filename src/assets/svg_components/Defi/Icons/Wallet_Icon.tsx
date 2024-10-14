import React from 'react'
// className='overflow-visible inline-block w-full h-auto align-top'

function Wallet_Icon() {
  return (
    <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ overflow: 'visible' }}
  >
    <g
      className="group"
      style={{ transform: 'rotate(0deg)', transformOrigin: '6px 16px' }}
      transform-origin="6px 16px"
    >
      <rect width="32" height="32" />
      <path
        className="back-rect"
        mask="url(#noncustodial-mask)"
        d="M6 18.7981V8.95194C6 7.80477 6.78074 6.80481 7.89366 6.52659L22.8937 2.77658C24.4715 2.38212 26 3.57551 26 5.20194V15.0481C26 16.1952 25.2193 17.1952 24.1063 17.4734L9.10634 21.2234C7.52847 21.6179 6 20.4245 6 18.7981Z"
        fill="#6BCEF5"
      />
      <path
        className="front-rect"
        d="M26 25.7966V15.9505C26 14.8033 25.2193 13.8033 24.1063 13.5251L9.10634 9.77509C7.52847 9.38063 6 10.574 6 12.2004V22.0466C6 23.1937 6.78074 24.1937 7.89366 24.4719L22.8937 28.2219C24.4715 28.6164 26 27.423 26 25.7966Z"
        fill="#B5E7FA"
      />
      <mask id="noncustodial-mask" width="32" height="32">
        <rect width="32" height="32" fill="white" />
        <path
          className="mask-shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29 25.798V15.9519C29 13.4282 27.2824 11.2282 24.8339 10.6161L9.83395 6.86614C6.36264 5.99832 3 8.62379 3 12.2019V22.048C3 24.5718 4.71763 26.7717 7.16605 27.3838L22.1661 31.1338C25.6374 32.0017 29 29.3762 29 25.798Z"
          fill="black"
        />
      </mask>
    </g>
  </svg>
  )
}

export default Wallet_Icon