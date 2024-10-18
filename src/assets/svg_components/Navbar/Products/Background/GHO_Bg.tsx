import React from 'react'
import GHO_Bg_Circle from './GHO_Bg_Circle'
function GHO_Bg({isGho} : {isGho : boolean | null} ) {
  return (
    <svg style={{position:"absolute",top:-27,right:-17}} width="138" height="179" viewBox="0 0 138 179" fill="none" xmlns="http://www.w3.org/2000/svg">
      <GHO_Bg_Circle cx="15" cy="76" r="15" fill="#28D358" delay={0.1} yi={0} yf={-10} isGho={isGho}/>
      <GHO_Bg_Circle cx="107" cy="31" r="31" fill="#44DD6F" delay={0.05} yi={0} yf={-14} isGho={isGho}/>
      <GHO_Bg_Circle cx="89" cy="130" r="49" fill="#62E687" delay={0} yi={0} yf={-16} isGho={isGho}/>
    </svg>
  )
}

export default GHO_Bg