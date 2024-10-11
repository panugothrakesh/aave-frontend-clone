'use client'

import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '@/components/Navbar/navbar';
import Hero from '@/components/Hero/hero';
import Meet from '@/components/Meet/Meet';

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

  return (
    <div className="">
      <div className="header fixed z-[200000] top-0 left-0 right-0">
        <Navbar />
      </div>
      <main className='h-full min-h-[100dvh]'>
        <Hero/>
        <Meet/>
      </main>
      <div className="text-lg font-regola h-[200vh] relative"></div>
    </div>
  );
}
