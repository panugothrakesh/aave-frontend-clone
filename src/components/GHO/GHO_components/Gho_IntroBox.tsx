import GHO_Intro from '@/assets/svg_components/GHO/Backgrounds/Gho_Intro'
import { useInView } from 'framer-motion';
import React, { useRef } from 'react'

function Gho_IntroBox() {
    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: .5 });
  return (
    <div ref={ref1} className='row-span-2 relative overflow-hidden rounded-2xl bg-bg_color'>
        <GHO_Intro isInView={isInView1}/>
    </div>
  )
}

export default Gho_IntroBox