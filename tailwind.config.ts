import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        send_down1:{
          "0%": { transform: "translateY(-184px)" },
          "100%": { transform: "translateY(0px)" },
        },
        send_down2:{
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(400px)" },
        },
        send_up1:{
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-184px)" },
        },
        send_up2:{
          "0%": { transform: "translateY(400px)" },
          "100%": { transform: "translateY(0)" },
        },
        toandfro_motion:{
          '0%, 100%':{
            transform: 'translateY(-30px)'
          },
          '50%':{
            transform: 'translateY(30px)'
          }
        },
      },
      animation: {
        down1: 'send_down1 .5s ease-in-out both',
        down2: 'send_down2 .5s ease-in-out both',
        up1: 'send_up1 .5s ease-in-out both',
        up2: 'send_up2 .5s ease-in-out forwards',
        up_down: 'toandfro_motion 4s infinite ease-in-out both',
      },
  		boxShadow: {
  			navbarShadow: '0px 1px 0px 0px rgba(0, 0, 0, 0.06)',
  			navbarCard: '0 6px 20px 0 rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.06)',
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
  			bordercolor: 'var(--border-color)',
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
      },
      animationDelay: {
        '300': '300ms',
        two: '200ms',
        three: '400ms',
        four: '600ms',
      },
      scale: {
        '98': '.98',
      },
  	}
  },
  plugins: [tailwindcssAnimate],
};
export default config;
