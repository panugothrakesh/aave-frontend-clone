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
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
