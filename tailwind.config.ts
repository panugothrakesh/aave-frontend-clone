import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      keyframes: {
        eye_move:{
          '10%': { transform: 'translateX(0)', },
          '16%, 22%': { transform: 'translateX(2.4px)', },
          '28%, 34%': { transform: 'translateX(-2.4px)', },
          '40%': { transform: 'translateX(0)', },
          '100%': { transform: 'translateX(0)', },
        },
        eye_blink:{
          '10%,46%': { transform: 'scaleY(1)' },
          '48%': {transform: 'scaleY(0)'},
          '50%': {transform: 'scaleY(1)'},
          '52%': {transform: 'scaleY(0)'},
          '54%, 100%': {transform: 'scaleY(1)'},
        },
        rainbow_rotate:{
          '0%':{
            transform: 'rotate(-180deg)',
        },
        '100%':{
            transform: 'rotate(180deg)',
        },
        },
        rainbow_button_wrap: {
          '0%':{
            transform: 'scaleX(0.95) scaleY(0.8)',
        },
        '40%': {
            transform: 'none',
        },
        '55%': {
            transform: 'none',
        },
        '80%, 100%': {
            transform: 'scaleX(0.95) scaleY(0.8)',
        }
        },
        radar_pulse:{
          '0%': {
            r: '0',
            opacity: '1',
          },
          '100%': {
            r: '16',
            opacity: '0',
          }
        },
        width_height_reveal: {
          '0%': {
            width: '0%',
            opacity: '0%',
          },
          '100%': {
            width: '100%',
            opacity: '100%',
          },
        },
        see: {
          '0%': { opacity: '0', pointerEvents: 'none' },
          '50%': { opacity: '1', pointerEvents: 'auto' },
        },        
        bar1animation: {
          '0%': { transform: 'translateY(420px)' },
          '100%': { transform: 'translateY(220px)' },
        },
        bar2animation: {
          '0%': { transform: 'translateY(430px)' },
          '100%': { transform: 'translateY(210px)' },
        },
        bar3animation: {
          '0%': { transform: 'translateY(460px)' },
          '100%': { transform: 'translateY(190px)' },
        },
        bar4animation: {
          '0%': { transform: 'translateY(480px)' },
          '100%': { transform: 'translateY(170px)' },
        },
        bar5animation: {
          '0%': { transform: 'translateY(530px)' },
          '100%': { transform: 'translateY(120px)' },
        },
        bar6animation: {
          '0%': { transform: 'translateY(590px)' },
          '100%': { transform: 'translateY(60px)' },
        },
      },
      animation: {
        blink: 'eye_blink 5s infinite linear;',
        eyes_move: 'eye_move 5s linear infinite',
        rainbow_gradient_rotate: 'rainbow_rotate 2s ease-in-out forwards',
        rainbow_button_animation: 'rainbow_button_wrap 2s ease-in-out forwards;',
        radar_circle: 'radar_pulse 2s infinite ease-out both;',
        width_height_reveal: '.75s width_height_reveal ease-in-out .5s forwards',
        see: 'see .75s ease-in-out .25s forwards',
        bar1: 'bar1animation 1s cubic-bezier(.2,.5,.0,1) 1.2s forwards',
        bar2: 'bar2animation 1s cubic-bezier(.2,.5,.0,1) 1.25s forwards',
        bar3: 'bar3animation 1s cubic-bezier(.2,.5,.0,1) 1.3s forwards',
        bar4: 'bar4animation 1s cubic-bezier(.2,.5,.0,1) 1.35s forwards',
        bar5: 'bar5animation 1s cubic-bezier(.2,.5,.0,1) 1.4s forwards',
        bar6: 'bar6animation 1s cubic-bezier(.2,.5,.0,1) 1.45s forwards',
      },
  		boxShadow: {
  			navbarShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.06)',
  			navbarCard: '0 6px 20px 0 rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.06)',
        rainbowHovered: '0 0 0 1.5px rgba(0,0,0,.1)',
        rainbow: '0 0 0 1.5px rgba(0,0,0,.06)'
  		},
  		colors: {
  			secondaryGray: 'var(--secondary-gray)',
  			tertiaryGray: 'var(--tertiary-gray)',
  			primaryGrayInActive: 'var(--primary-gray-inActive)',
  			primaryHeadingGray: 'var(--primary-heading-gray)',
  			primaryHeadingGrayInActive: 'var(--primary-heading-gray-inActive)',
  			primaryHeadingBlue: 'var(--primary-heading-blue)',
  			primaryParagraph: 'var(--primary-paragraph)',
  			secondaryParagraph: 'var(--secondary-paragraph)',
  			backgroundHover: 'var(--background-hover)',
  			backgroundGray: 'var(--background-gray)',
  			backgroundGrayHover: 'var(--background-gray-hover)',
  			trail: 'color(display-p3 .0549 .7255 .2431)',
  			announcements: 'var(--announcements)',
  		},
  		fontFamily: {
  			regola: ['var(--font-fs-regola)'],
  			regolaMedium: ['var(--font-fs-regola-medium)'],
  			inter: ['var(--font-inter)'],
  			roboto: ['var(--font-roboto)']
  		},
      backgroundImage: {
        'colorful-bar': 'linear-gradient(0deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1)), linear-gradient(90deg, #39d1f9 10.43%, #ffb400 27.01%, #00827c 44.64%, #008aff 56.05%, #ff3200 73.58%, #9896ff 90.51%)',
        'rainbow-background': 'conic-gradient(from 0deg at 50% 50%, #ff8947 0deg, #b5e7fa 124.43deg, #9896ff 179.13deg, #63bbb6 233.53deg, #ffd631 308.53deg, #ff8947 364.52deg)',
      },
      width:{
        'calc-100-plus-8': 'calc(100% + 8px)',
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
