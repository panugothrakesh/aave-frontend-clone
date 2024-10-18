import React, { useRef } from 'react'
import Bottom_Bars from './Footer_components/Bottom_Bars'
import { useInView } from 'framer-motion';
import navData from '@/assets/Data/Footer_Nav_Data';
import Svg_Links from './Footer_components/Svg_Links';

function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 1 });
    
  return (
    <section className='my-0 mx-auto w-full max-w-[1082px] px-5 md:px-0 md:pb-[72px] pb-12'>
            <footer ref={ref} className='rounded-2xl py-9 px-6 md:p-12 bg-bg_color'>
                <div className='flex justify-between flex-col md:flex-row gap-y-12 md:gap-y-0 gap-x-0 md:gap-x-20'>
                    <div>
                        <a href="">
                            <svg className="flex-shrink-0 h-4 fill-secondaryParagraph" viewBox="0 0 3518 602" xmlns="http://www.w3.org/2000/svg"><path d="M3227.15 465.507C3151.69 465.507 3084.63 410.83 3067.36 335.342H3515.4C3515.4 335.342 3517.8 307.991 3517.8 298.315C3517.8 138.096 3387.45 7.71484 3227.23 7.71484C3067.01 7.71484 2936.66 138.069 2936.66 298.315C2936.66 458.561 3066.28 585.888 3227.23 585.888C3388.18 585.888 3482.15 467.318 3505.61 381.478H3369.04C3369.04 381.478 3325.61 465.507 3227.15 465.507ZM3227.23 128.041C3299.58 128.041 3362.39 175.826 3383.91 247.044H3070.55C3091.98 175.826 3154.82 128.041 3227.23 128.041Z"></path><path d="M1517.47 585.888C1357.25 585.888 1231.57 456.885 1231.57 298.315C1231.57 139.744 1361.92 7.71484 1522.14 7.71484C1682.36 7.71484 1812.72 143.204 1812.72 296.774C1812.72 362.208 1812.72 571.482 1812.72 571.482H1699.9V479.805L1691.69 477.642C1671.82 526.346 1599.88 585.888 1517.47 585.888ZM1522.14 128.041C1431.65 128.041 1358 204.016 1358 297.423C1358 390.83 1431.63 465.534 1522.14 465.534C1612.66 465.534 1686.28 390.127 1686.28 297.423C1686.28 204.718 1612.66 128.041 1522.14 128.041Z"></path><path d="M2134.6 585.888C1974.38 585.888 1848.73 456.885 1848.73 298.315C1848.73 139.744 1979.08 7.71484 2139.3 7.71484C2299.52 7.71484 2429.88 143.204 2429.88 296.774C2429.88 362.208 2429.88 571.482 2429.88 571.482H2317.06V479.805L2308.85 477.642C2288.98 526.346 2217.01 585.888 2134.6 585.888ZM2139.3 128.041C2048.82 128.041 1975.17 204.016 1975.17 297.423C1975.17 390.83 2048.79 465.534 2139.3 465.534C2229.82 465.534 2303.44 390.127 2303.44 297.423C2303.44 204.718 2229.82 128.041 2139.3 128.041Z"></path> <path d="M2619.27 571.425L2387.72 22.1719H2514.4L2684.11 426.774L2853.84 22.1719H2980.49L2748.97 571.425H2619.27Z"></path><path d="M560.821 0C251.059 0 -0.0810629 255.924 1.96281e-05 571.524H143.273C143.273 335.006 328.736 143.246 560.821 143.246C792.906 143.246 978.369 335.006 978.369 571.524H1121.64C1121.7 255.924 870.556 0 560.821 0Z"></path><circle cx="710" cy="471" r="114"></circle><circle cx="412" cy="471" r="114"></circle></svg>
                        </a>
                        <p className='mt-7 max-w-[433px] text-[10px] leading-[120%] tracking-[.1px] text-[#b6b6b6]'>
                        Aave.com provides information and resources about the fundamentals of the decentralised non-custodial liquidity protocol called the Aave Protocol, comprised of open-source self-executing smart contracts that are deployed on various permissionless public blockchains, such as Ethereum &#x28;the &quot;Aave Protocol&quot; or the &quot;Protocol&quot;&#x29;. Aave Labs does not control or operate any version of the Aave Protocol on any blockchain network.
                        </p>
                    </div>
                    <nav className='w-full max-w-[457px]'>
                        <ul className='list-none flex md:gap-x-[72px] gap-8 xs:justify-between justify-start xs:flex-nowrap flex-wrap'>
                        {navData.map((section, index) => (
                            <li key={index}>
                            <p className="no-underline font-inter text-sm font-medium leading-[105%] -tracking-[0.09px] text-[#221d1d]">
                                {section.title}
                            </p>
                            <ul className="list-none flex flex-col gap-y-3 mt-4">
                                {section.links.map((linkItem, linkIndex) => (
                                <li key={linkIndex} className="leading-[105%]">
                                    <a
                                    href={linkItem.link}
                                    className="no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out"
                                    >
                                    {linkItem.subhead}
                                    </a>
                                </li>
                                ))}
                            </ul>
                            </li>
                        ))}
                        </ul>
                    </nav>
                </div>
                <Svg_Links/>
            </footer>
            <Bottom_Bars isInView={isInView}/>
    </section>
  )
}

export default Footer