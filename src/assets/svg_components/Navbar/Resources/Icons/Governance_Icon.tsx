import React from 'react'

function Governance_Icon({ isActive }: { isActive: number }) {
  return (
    <svg
        className="styles_menuLinkIcon__99tEg"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
    >
        <rect x="0.5" y="0.5" width="47" height="47" rx="3.5" stroke="#F1F1F0" fill="#fff"></rect>
        <rect x="13" y="25" width="5" height="11" rx="2" fill={isActive == 3 ? "#5589c5" : "#bcbbbb"} className='transition-all duration-300 ease-in-out'></rect>
        <rect x="21" y="25" width="5" height="11" rx="2" fill={isActive == 3 ? "#5589c5" : "#bcbbbb"} className='transition-all duration-300 ease-in-out'></rect>
        <rect x="29" y="25" width="5" height="11" rx="2" fill={isActive == 3 ? "#5589c5" : "#bcbbbb"} className='transition-all duration-300 ease-in-out'></rect>
        <path
        d="M21.551 12.2498C22.823 11.4813 24.4161 11.4813 25.6881 12.2498L34.56 17.6102C36.7267 18.9194 35.7986 22.25 33.2671 22.25H13.972C11.4405 22.25 10.5124 18.9194 12.6791 17.6102L21.551 12.2498Z"
        fill={isActive == 3 ? "#00498b" : "#8f8f8f"} className='transition-all duration-300 ease-in-out'
        ></path>
    </svg>
  )
}

export default Governance_Icon