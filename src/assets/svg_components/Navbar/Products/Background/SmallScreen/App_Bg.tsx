import React from 'react'

function App_Bg() {
  return (
    <svg className='absolute -top-16 -right-32' width="256" height="256" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style={{ transform: 'none', transformOrigin: '0px 0px' }}>
        <circle mask="url(#menu1-circle-mask-2)" cx="128" cy="128" r="128" fill="#E2E0FF"></circle>
        <circle mask="url(#menu1-circle-mask-1)" cx="128" cy="128" r="128" fill="#BCBBFF"></circle>
      </g>
      <g style={{ transform: 'none', transformOrigin: '0px 0px' }}>
        <circle mask="url(#menu1-circle-mask-2)" cx="128" cy="128" r="64" fill="#9896FF"></circle>
        <circle mask="url(#menu1-circle-mask-1)" cx="128" cy="128" r="64" fill="#E2E0FF"></circle>
      </g>
      <defs>
        <mask id="menu1-circle-mask-1">
          <rect y="128" width="256" height="128" fill="white"></rect>
        </mask>
        <mask id="menu1-circle-mask-2">
          <rect width="256" height="128" fill="white"></rect>
        </mask>
      </defs>
    </svg>
  )
}

export default App_Bg