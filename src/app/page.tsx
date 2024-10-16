'use client'

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar/navbar';
import Hero from '@/components/Hero/hero';
import Meet from '@/components/Meet/Meet';
import Numbers from '@/components/Numbers/numbers';
import { motion } from "framer-motion";
import Defi_Unlocked from '@/components/Defi/Defi_Unlocked';
import GHO from '@/components/GHO/gho';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  const pageload={
    hidden:{opacity:0},
    visible:{opacity:1,
      transition:{duration:0.4, ease: 'easeIn', once:true }
    },
  }

  return (
    <div>
        <Navbar />
        <motion.main initial='hidden' animate='visible' variants={pageload} className='h-full min-h-[100dvh]'>
          <Hero/>
          <Meet/>
          <Numbers/>
          <Defi_Unlocked/>
          <GHO/>
        </motion.main>
      <div className="text-lg font-regola h-[200vh] relative"></div>
    </div>
  );
}
