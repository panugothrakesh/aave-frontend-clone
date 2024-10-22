import React from 'react'

function Documentation_Sg({ isActive }: { isActive: number }) {
  return (
    <svg
        className="rounded-lg overflow-hidden"
        style={{ overflow: 'hidden' }}
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="192"
        viewBox="0 0 256 192"
        fill="none"
    >
        <rect rx="8" width="256" height="192"
        className='duration-300 transition-all ease-in-out'
        fill={isActive === 0 ? "color(display-p3 0.4196 0.8078 0.9608)" : isActive === 1 ? "color(display-p3 0.121 0.5025 0.4806)" : "color(display-p3 1 0.72 0)"}
        ></rect>
        <g className='duration-300 transition-all ease-in-out' style={{ transform: isActive === 2 ? "none" : 'translateX(170px)', transformOrigin: '210px 96px' }}>
            <g className='duration-300 transition-all ease-in-out' style={{ transform: isActive === 2 ? 'none' : 'rotate(-45deg)', transformOrigin: '210px 96px' }}>
                <path d="M86 96C86 164.483 141.517 220 210 220L210 96L86 96Z" fill="#FFF7AE"></path>
                <path d="M334 96C334 27.5167 278.483 -28 210 -27.9999L210 96L334 96Z" fill="#FFF7AE"></path>
                <path d="M210 -28C141.517 -28 86.0001 27.5167 86.0001 96L210 96L210 -28Z" fill="#FFD631"></path>
                <path d="M210 220C278.483 220 334 164.483 334 96L210 96L210 220Z" fill="#FFD631"></path>
            </g>
            <g className='duration-300 transition-all ease-in-out' style={{ transform: isActive === 2 ? 'none' : 'rotate(90deg)', transformOrigin: '210px 95.9959px' }}>
                <path d="M210 174.324C253.26 174.324 288.328 139.256 288.328 95.9961L210 95.9961L210 174.324Z" fill="#FFF7AE"></path>
                <path d="M210 17.6677C166.74 17.6677 131.672 52.7365 131.672 95.9961L210 95.9961L210 17.6677Z" fill="#FFF7AE"></path>
                <path d="M131.672 95.9961C131.672 139.256 166.74 174.324 210 174.324L210 95.9961L131.672 95.9961Z" fill="#FFD631"></path>
                <path d="M288.328 95.9961C288.328 52.7365 253.26 17.6677 210 17.6677L210 95.9961L288.328 95.9961Z" fill="#FFD631"></path>
            </g>
        </g>
        <g className='duration-300 transition-all ease-in-out' style={{ transform: isActive == 1 ? 'none' : 'translateX(-140px)',transition: isActive === 1 ? 'transform 0.3s 0.05s ease-in-out' : "transform 0.3s ease-in-out", transformOrigin: '92px 96px' }}>
            <path d="M92 144C65.4903 144 44 122.51 44 96L140 96C140 122.51 118.51 144 92 144Z" fill="#63BBB6"></path>
            <path d="M92 48C118.51 48 140 69.4903 140 96L44 96C44 69.4903 65.4903 48 92 48Z" fill="#9DEBE7"></path>
        </g>
        <g className='duration-300 transition-all ease-in-out' style={{ transform: isActive == 1 ? 'none' : 'translateX(-100px)',transition: isActive === 1 ? 'transform 0.3s 0.025s ease-in-out' : "transform 0.3s ease-in-out", transformOrigin: '44px 96px' }}>
            <path d="M44 192C17.4903 192 -4 170.51 -3.99999 144L92 144C92 170.51 70.5097 192 44 192Z" fill="#63BBB6"></path>
            <path d="M44 96C70.5097 96 92 117.49 92 144L-4 144C-4 117.49 17.4903 96 44 96Z" fill="#9DEBE7"></path>
            <path d="M44 96C17.4903 96 -4 74.5097 -3.99999 48L92 48C92 74.5097 70.5097 96 44 96Z" fill="#63BBB6"></path>
            <path d="M44 -3.4331e-06C70.5097 -1.11555e-06 92 21.4903 92 48L-4 48C-4 21.4903 17.4903 -5.75065e-06 44 -3.4331e-06Z" fill="#9DEBE7"></path>
        </g>
        <g className='duration-300 transition-all ease-in-out' style={{ transform: isActive == 1 ? 'none' : 'translateX(-44px)',transition: isActive === 1 ? 'transform 0.3s 0s ease-in-out' : "transform 0.3s ease-in-out", transformOrigin: '-4px 96px' }}>
            <path d="M-4 144C-30.5097 144 -52 122.51 -52 96L44 96C44 122.51 22.5097 144 -4 144Z" fill="#63BBB6"></path>
            <path d="M-4 144C22.5097 144 44 165.49 44 192L-52 192C-52 165.49 -30.5097 144 -4 144Z" fill="#9DEBE7"></path>
            <path d="M-4 48C-30.5097 48 -52 26.5097 -52 -1.67852e-05L44 0C44 26.5097 22.5097 48 -4 48Z" fill="#63BBB6"></path>
            <path d="M-4 48C22.5097 48 44 69.4903 44 96L-52 96C-52 69.4903 -30.5097 48 -4 48Z" fill="#9DEBE7"></path>
        </g>
        <g className='duration-300 transition-all ease-in-out' style={{ transform: isActive == 0 ? 'none' : 'translateY(128px)', transformOrigin: '128px 192px' }}>
            <path d="M128 192C128 262.692 185.308 320 256 320L256 64C185.308 64 128 121.308 128 192Z" fill="#B5E7FA"></path>
            <path d="M128 192C128 262.692 70.6924 320 -3.35703e-05 320L0 64C70.6925 64 128 121.308 128 192Z" fill="#DFF6FF"></path>
        </g>
        <g className='duration-300 transition-all ease-in-out' style={{ transform: isActive == 0 ? 'none' : 'translateY(68px)',transition: isActive === 0 ? 'transform 0.3s 0.05s ease-in-out' : "transform 0.3s ease-in-out", transformOrigin: '128px 252px' }}>
            <path d="M128 252C128 322.692 70.6924 380 -3.35703e-05 380L0 124C70.6925 124 128 181.308 128 252Z" fill="#B5E7FA"></path>
            <path d="M128 252C128 322.692 185.308 380 256 380L256 124C185.308 124 128 181.308 128 252Z" fill="#DFF6FF"></path>
        </g>
    </svg>
  )
}

export default Documentation_Sg