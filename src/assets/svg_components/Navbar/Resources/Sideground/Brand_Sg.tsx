import React from 'react'

function Brand_Sg({ isActive }: { isActive: number }) {
    
  return (
    <svg className="block rounded-lg w-[256px] h-[256px] overflow-hidden" style={{ overflow: 'hidden' }} xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">
        <rect rx="8" width="256" height="256" className='transition-all duration-300 ease-in-out'
        fill={isActive === 0 ? "color(display-p3 0.5951 0.587 1)" : isActive === 1 ? "color(display-p3 0.121 0.5025 0.4806)" : isActive === 2 ? "color(display-p3 0.949 0.2863 0)" : "color(display-p3 0.1098 0.2824 0.5255)"}>
        </rect>
        <path className='transition-all duration-300 ease-in-out' d="M128 100C49.5757 100 -13.9999 36.4244 -13.9999 -42L270 -42C270 36.4244 206.424 100 128 100Z" fill="#BCBBFF" style={{ transform: isActive === 0 ? 'none' : 'translateY(-100px)', transformOrigin: '128px 29px' }}></path>
        <path d="M128 29C88.7878 29 57 -2.78779 57 -42L199 -42C199 -2.78777 167.212 29 128 29Z" fill="#9896FF" style={{ transform: isActive === 0 ? 'none' : 'translateY(-100px)', transition: isActive === 0 ? 'transform 0.3s 0.1s ease-in-out' : "transform 0.3s ease-in-out", transformOrigin: '128px -6.5px' }} ></path>
        <path className='transition-all duration-300 ease-in-out' d="M128 156C206.424 156 270 219.576 270 298L-14 298C-14 219.576 49.5756 156 128 156Z" fill="#E2E0FF" style={{ transform: isActive === 0 ? 'none' : 'translateY(100px)', transformOrigin: '128px 227px' }} ></path>
        <path d="M128 227C167.212 227 199 258.788 199 298L57 298C57 258.788 88.7878 227 128 227Z" fill="#BCBBFF" style={{ transform: isActive === 0 ? 'none' : 'translateY(100px)', transition: isActive === 0 ? 'transform 0.3s 0.1s ease-in-out' : "transform 0.3s ease-in-out", transformOrigin: '128px 262.5px' }} ></path>
        <g>
        <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 1 ? 'none' : 'translateX(156px) translateY(-78px)', transformOrigin: '240px -25.9986px', }}>
            <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 1 ? "none" : 'rotate(45deg)', transformOrigin: '240px -25.9986px' }} >
            <path d="M361.244 44.0013C322.584 110.962 236.961 133.905 170 95.2448L310 -147.242C376.961 -108.582 399.904 -22.9596 361.244 44.0013Z" fill="#9DEBE7" ></path>
            <path d="M118.756 -95.9987C157.416 -162.96 243.038 -185.902 309.999 -147.242L169.999 95.2448C103.038 56.5848 80.096 -29.0378 118.756 -95.9987Z" fill="#63BBB6" ></path>
            </g>
            <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 1 ? "none" : 'rotate(-90deg)', transformOrigin: '239.999px -25.9993px' }}>
            <path
                d="M300.622 9.00069C281.292 42.4812 238.48 53.9524 205 34.6224L275 -86.6211C308.481 -67.2911 319.952 -24.4798 300.622 9.00069Z"
                fill="#63BBB6"
            ></path>
            <path
                d="M179.377 -60.9993C198.707 -94.4798 241.518 -105.951 274.999 -86.6211L204.999 34.6224C171.518 15.2925 160.047 -27.5189 179.377 -60.9993Z"
                fill="#9DEBE7"
            ></path>
            </g>
        </g>
        <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 1 ? 'none' : 'translateX(-156px) translateY(78px)', transformOrigin: '16.0017px 281.997px', }}>
            <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 1 ? "none" : 'rotate(45deg)', transformOrigin: '16.0017px 281.997px' }} >
            <path d="M-105.242 211.997C-143.902 278.958 -120.96 364.581 -53.9986 403.241L86.0013 160.754C19.0404 122.094 -66.5823 145.036 -105.242 211.997Z" fill="#9DEBE7"></path>
            <path d="M137.246 351.997C175.905 285.036 152.963 199.414 86.002 160.754L-53.998 403.241C12.963 441.901 98.5856 418.958 137.246 351.997Z" fill="#63BBB6"></path>
            </g>
            <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 1 ? "none" : 'rotate(-90deg)', transformOrigin: '16.0013px 281.997px' }} >
            <path d="M-44.6211 246.997C-63.9511 280.477 -52.4798 323.289 -18.9993 342.619L51.0007 221.375C17.5202 202.045 -25.2911 213.516 -44.6211 246.997Z" fill="#63BBB6" ></path>
            <path
                d="M76.6238 316.997C95.9537 283.516 84.4824 240.705 51.002 221.375L-18.998 342.619C14.4825 361.949 57.2938 350.477 76.6238 316.997Z"
                fill="#9DEBE7"
            ></path>
            </g>
        </g>
        </g>
        <g className='duration-300 ease-in-out transition-all' opacity={isActive === 2 ? "1" : "0"} style={{ transform: isActive === 2 ? 'none' : 'scale(0.5) rotate(-135deg)', transformOrigin: '128px 128px' }}>
        <path
            d="M128 214C80.5035 214 42 175.496 42 128L214 128C214 175.497 175.496 214 128 214Z"
            fill="#FF8947"
        ></path>
        <path
            d="M128 42C80.5035 42 42 80.5035 42 128L214 128C214 80.5035 175.496 42 128 42Z"
            fill="#FFD7B3"
        ></path>
        </g>
        <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 3 ? 'none' : 'translateY(216px)', transformOrigin: '127px 168px' }}>
        <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 3 ? 'none' : 'rotate(-180deg)', transformOrigin: '127px 104px' }}>
            <path
            d="M127 40C91.6538 40 63 68.6538 63 104C63 139.346 91.6538 168 127 168V40Z"
            fill="#6188C0"
            ></path>
            <path
            d="M127 40C162.346 40 191 68.6538 191 104C191 139.346 162.346 168 127 168V40Z"
            fill="#C6DFFF"
            ></path>
        </g>
        <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 3 ? 'none' : 'rotate(180deg)', transformOrigin: '127px 232px' }}>
            <path
            d="M127 168C162.346 168 191 196.654 191 232C191 267.346 162.346 296 127 296V168Z"
            fill="#6188C0"
            ></path>
            <path
            d="M127 168C91.6538 168 63 196.654 63 232C63 267.346 91.6538 296 127 296V168Z"
            fill="#C6DFFF"
            ></path>
        </g>
        </g>
        <g className='duration-300 ease-in-out transition-all' style={{ transform: isActive === 3 ? 'none' : 'translateY(192px)', transition: isActive === 3 ? 'transform 0.4s ease-in-out' : "transform 0.3s ease-in-out", transformOrigin: '127.5px 191px' }}>
        <circle cx="255" cy="255" r="64" fill="#C6DFFF"></circle>
        <circle cx="255" cy="127" r="64" fill="#6188C0"></circle>
        <circle cy="255" r="64" fill="#6188C0"></circle>
        <circle cy="127" r="64" fill="#C6DFFF"></circle>
        </g>
    </svg>
  )
}

export default Brand_Sg