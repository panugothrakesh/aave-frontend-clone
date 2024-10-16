import React from 'react'

function DropDownArrow({ isHoveredProducts, isHoveredDevelopers, isHoveredResources, isSticky, open} 
    : 
{ isHoveredProducts: boolean; isHoveredDevelopers: boolean; isHoveredResources: boolean; isSticky: boolean; open: boolean; }) {
  return (
    <svg className={`absolute inline-block align-top max-w-full -left-[14px] transition-all duration-300 ease-in-out z-[1000] h-[9px] w-7 opacity-0 
              ${open ? "opacity-100 -translate-y-[0.5px]" : "translate-x-[45.5px]"}
              ${isHoveredProducts ? "translate-x-[45.5px]" : ""}
              ${isHoveredResources ? "translate-x-[150px]" : ""}
              ${isHoveredDevelopers ? "translate-x-[262.5px]" : ""}
              ${isSticky ? "-bottom-[25px]" : "-bottom-[11px]"}
                `} xmlns="http://www.w3.org/2000/svg" width="28" height="8" viewBox="0 0 28 8" fill="none"><path d="M12.5858 1.55273L9.74904 4.32982C8.36542 5.68433 7.67361 6.36159 6.86628 6.84592C6.1505 7.27532 5.37015 7.59176 4.55386 7.78361C3.63316 8 2.65479 8 0.698068 8H27.3019C25.3452 8 24.3668 8 23.4461 7.78361C22.6299 7.59176 21.8495 7.27532 21.1337 6.84592C20.3264 6.36159 19.6346 5.68433 18.251 4.32982L15.4142 1.55273C14.6332 0.788112 13.3668 0.788114 12.5858 1.55273Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M21.4021 6.99951H25.1557C24.5326 6.97673 24.0974 6.9294 23.6796 6.8312C22.9653 6.66333 22.2825 6.38645 21.6562 6.01072C20.9733 5.60102 20.3753 5.02456 18.9581 3.6371L16.1213 0.86001C14.9497 -0.286921 13.0503 -0.286917 11.8787 0.860012L9.04193 3.6371C7.62466 5.02456 7.02673 5.60102 6.34378 6.01072C5.71748 6.38645 5.03466 6.66333 4.32041 6.8312C3.90259 6.9294 3.4674 6.97673 2.84427 6.99951H6.59786C6.68828 6.94989 6.77778 6.89852 6.86628 6.84543C7.67361 6.3611 8.36542 5.68384 9.74904 4.32933L12.5858 1.55225C13.3668 0.787626 14.6332 0.787624 15.4142 1.55224L18.251 4.32933C19.6346 5.68384 20.3264 6.3611 21.1337 6.84543C21.2222 6.89852 21.3117 6.94989 21.4021 6.99951Z" fill="black" fill-opacity="0.06"></path>
    </svg>
  )
}

export default DropDownArrow