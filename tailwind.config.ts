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
    screens: {
      'xs': '480px',
      'sm': '520px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  	extend: {
      keyframes: {
        bottomMove_Animation: {
          '0%': { 'background-position': '0 0' },
          '10%': { 'background-position': '0 0' },
          '20%': { 'background-position': '0 0' },
          '30%': { 'background-position': '0 0' },
          '40%': { 'background-position': '0 0' },
          '50%': { 'background-position': '0 0' },
          '60%': { 'background-position': '0 0' },
          '70%': { 'background-position': '0 0' },
          '100%': { 'background-position': '100% 0' },
        },
      },
      animation: {
        'bg-move': 'bottomMove_Animation 6s ease-in-out infinite',
      },
  		boxShadow: {
  			navbarShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.06)',
  			navbarCard: '0 6px 20px 0 rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.06)',
  			link_buttons: '0 2px 3px 0 rgba(0,0,0,.08),0 6px 16px 0 rgba(0,0,0,.1)',
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
  			bordercolor: 'var(--border-color)',
        bg_color: 'var(--bg-color)',
        trail: 'color(display-p3 .0549 .7255 .2431)',
        stroke_color: 'color(display-p3 0.9059 0.9725 0.9216)'
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
        'current-lineart': 'linear-gradient(180deg, red 0, red)',
        'current-linear': 'linear-gradient(180deg, currentColor 0, currentColor)',
        'hover-linear' : 'linear-gradient(90deg,CurrentColor,CurrentColor 33.33%,currentColor 0,currentColor 66.66%,currentColor 0,currentColor)',
        'hover-linearH' : 'linear-gradient(90deg,CurrentColor,CurrentColor 33.33%,transparent 0,transparent 66.66%,currentColor 0,currentColor)',
        'left-fade' : 'linear-gradient(90deg, #fff 0, hsla(0, 0%, 100%, .738) 19%, hsla(0, 0%, 100%, .541) 34%, hsla(0, 0%, 100%, .382) 47%, hsla(0, 0%, 100%, .278) 56.5%, hsla(0, 0%, 100%, .194) 65%, hsla(0, 0%, 100%, .126) 73%, hsla(0, 0%, 100%, .075) 80.2%, hsla(0, 0%, 100%, .042) 86.1%, hsla(0, 0%, 100%, .021) 91%, hsla(0, 0%, 100%, .008) 95.2%, hsla(0, 0%, 100%, .002) 98.2%, hsla(0, 0%, 100%, 0))',
        'right-fade' : 'linear-gradient(270deg,#fff 0,hsla(0,0%,100%,.738) 19%,hsla(0,0%,100%,.541) 34%,hsla(0,0%,100%,.382) 47%,hsla(0,0%,100%,.278) 56.5%,hsla(0,0%,100%,.194) 65%,hsla(0,0%,100%,.126) 73%,hsla(0,0%,100%,.075) 80.2%,hsla(0,0%,100%,.042) 86.1%,hsla(0,0%,100%,.021) 91%,hsla(0,0%,100%,.008) 95.2%,hsla(0,0%,100%,.002) 98.2%,hsla(0,0%,100%,0))',
        'bottom-gradient' : 'linear-gradient(0deg,color(display-p3 1 1 1/.1),color(display-p3 1 1 1/.1)),linear-gradient(90deg,color(display-p3 .4196 .8078 .9608),color(display-p3 1 .7216 0) 8.3%,color(display-p3 .1216 .502 .4824) 16.6%,color(display-p3 .102 .5333 .9725) 24.9%,color(display-p3 .949 .2863 0) 33.2%,color(display-p3 .5951 .587 1) 41.5%,color(display-p3 .4196 .8078 .9608) 49.8%,color(display-p3 1 .7216 0) 58.1%,color(display-p3 .1216 .502 .4824) 66.4%,color(display-p3 .102 .5333 .9725) 74.7%,color(display-p3 .949 .2863 0) 83%,color(display-p3 .5951 .587 1) 91.3%,color(display-p3 .4196 .8078 .9608))',
      },
      width:{
        'calc-100-plus-8': 'calc(100% + 8px)',
      },
      animationDelay: {
        '300': '300ms',
      },
      scale: {
        '98': '.98',
      },
      backgroundSize: {
        '300%_2px': '300% 2px',
        '0_100%': '0 100%',
        '100%_100%': '100% 100%',
        '50%_100%': '50% 100%',
        '75%_100%': '75% 100%',
      },
      transitionProperty:{
        bg_position_opacity: 'background-position,opacity'
      },
  	},
  },
  plugins: [],
};
export default config;
