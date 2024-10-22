import React from 'react'

function Bug_Bounty_Icon({ isActive }: { isActive: number }) {
  return (
    <svg
        className="styles_menuLinkIcon__8pMoP"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
    >
        <rect x="0.5" y="0.5" width="47" height="47" rx="3.5" stroke="#F1F1F0" fill="#fff"></rect>
        <path
            d="M24 34C27.1591 34 30.0687 33.3619 32.2254 32.2835C34.3223 31.2351 36 29.6016 36 27.5C36 25.3984 34.3223 23.7649 32.2254 22.7165C30.0687 21.6381 27.1591 21 24 21C20.8409 21 17.9313 21.6381 15.7746 22.7165C13.6777 23.7649 12 25.3984 12 27.5C12 29.6016 13.6777 31.2351 15.7746 32.2835C17.9313 33.3619 20.8409 34 24 34Z"
            fill={isActive === 2 ? "#ffb000" : "#8F8F91"}
            className='transition-all duration-300 ease-in-out'
            stroke="white"
            strokeWidth="2"
        ></path>
        <path
            d="M24 26.5C27.2199 26.5 30.2092 25.8506 32.449 24.7307C34.5991 23.6557 36.5 21.893 36.5 19.5C36.5 17.107 34.5991 15.3443 32.449 14.2693C30.2092 13.1494 27.2199 12.5 24 12.5C20.7801 12.5 17.7908 13.1494 15.551 14.2693C13.4009 15.3443 11.5 17.107 11.5 19.5C11.5 21.893 13.4009 23.6557 15.551 24.7307C17.7908 25.8506 20.7801 26.5 24 26.5Z"
            fill={isActive === 2 ? "#ffd400" : "#bcbbbb"}
            className='transition-all duration-300 ease-in-out'
            stroke="white"
            strokeWidth="3"
        ></path>
    </svg>
  )
}

export default Bug_Bounty_Icon