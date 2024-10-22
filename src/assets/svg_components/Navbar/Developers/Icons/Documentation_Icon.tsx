import React from 'react'

function Documentation_Icon({ isActive }: { isActive: number }) {
  return (
    <svg className="" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="47" height="47" rx="3.5" stroke="#F1F1F0" fill="#fff"></rect>
      <path className='transition-all duration-300 ease-in-out' d="M11 16.0172V30.3485C11 32.3417 12.9077 33.7807 14.8242 33.2331L24.8242 30.376C26.1121 30.008 27 28.8308 27 27.4914V11.6515C27 9.65832 25.0923 8.21933 23.1758 8.76689L14.6264 11.2096C12.4799 11.8229 11 13.7848 11 16.0172Z" fill={isActive === 0 ? "#39d1f9" : "#8f8f8f"} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
      <path className='transition-all duration-300 ease-in-out' d="M19.5 20.5086V36.3485C19.5 38.6739 21.7257 40.3527 23.9615 39.7139L33.9615 36.8567C35.4641 36.4274 36.5 35.0541 36.5 33.4914V17.6515C36.5 15.3261 34.2743 13.6473 32.0385 14.2861L22.0385 17.1433C20.5359 17.5726 19.5 18.9459 19.5 20.5086Z" fill={isActive === 0 ? "#a7e9fd" : "#bcbbbb"} stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  )
}

export default Documentation_Icon