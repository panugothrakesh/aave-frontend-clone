import React, { useRef } from 'react'
import Bottom_Bars from './Footer_components/Bottom_Bars'
import { useInView } from 'framer-motion';

function Footer() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: .5 });
    
  return (
    <section className='my-0 mx-auto w-full max-w-[1082px] px-5 md:px-0 md:pb-[72px] pb-12'>
            <footer className='rounded-2xl py-9 px-6 md:p-12 bg-bg_color'>
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
                            <li>
                                <p className='no-underline font-inter text-sm font-medium leading-[105%] -tracking-[0.09px] text-[#221d1d]'>
                                    Resources
                                </p>
                                <ul className='list-none flex flex-col gap-y-3 mt-4'>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Brand
                                        </a>
                                    </li>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            FAQ
                                        </a>
                                    </li>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Help & Support
                                        </a>
                                    </li>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Governance
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className='no-underline font-inter text-sm font-medium leading-[105%] -tracking-[0.09px] text-[#221d1d]'>
                                    Developers
                                </p>
                                <ul className='list-none flex flex-col gap-y-3 mt-4'>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Documentation
                                        </a>
                                    </li>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Technical Paper
                                        </a>
                                    </li>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Security
                                        </a>
                                    </li>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Bug Bounty
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <p className='no-underline font-inter text-sm font-medium leading-[105%] -tracking-[0.09px] text-[#221d1d]'>
                                    Company
                                </p>
                                <ul className='list-none flex flex-col gap-y-3 mt-4'>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Terms of Use
                                        </a>
                                    </li>
                                    <li className='leading-[105%]'>
                                        <a href="" className='no-underline font-inter text-sm -tracking-[0.09px] text-[#8f8e8e] hover:text-primaryHeadingGray transition-all duration-100 ease-in-out'>
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div ref={ref} className='flex items-center gap-x-6 mt-[104px]'>
                    <a href="https://x.com/aave" className='flex'>
                        <svg className="h-[22px] overflow-visible fill-secondaryParagraph hover:fill-primaryHeadingGray transition-all ease-in-out duration-100" viewBox="0 0 16 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.6009 2.94141H15.0544L9.69434 8.9215L16 17.0591H11.0627L7.19566 12.1237L2.77087 17.0591H0.31595L6.04904 10.6627L0 2.94141H5.06262L8.55811 7.45254L12.6009 2.94141ZM11.7399 15.6256H13.0993L4.32392 4.2996H2.86506L11.7399 15.6256Z"></path></svg>
                    </a>
                    <a href="https://discord.com/invite/aave" className='flex'>
                        <svg className="h-[22px] overflow-visible fill-secondaryParagraph hover:fill-primaryHeadingGray transition-all ease-in-out duration-100" viewBox="0 0 19 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.1088 3.98442C18.2546 7.13936 19.3143 10.6981 18.9182 14.7949C18.9165 14.8123 18.9075 14.8282 18.8933 14.8386C17.2683 16.0318 15.6939 16.756 14.1416 17.2362C14.1295 17.2399 14.1166 17.2397 14.1046 17.2356C14.0927 17.2316 14.0822 17.2239 14.0749 17.2136C13.7162 16.7146 13.3904 16.1886 13.1049 15.6361C13.0885 15.6036 13.1035 15.5644 13.1372 15.5516C13.6547 15.3566 14.1468 15.1229 14.6202 14.8462C14.6575 14.8244 14.6598 14.7709 14.6254 14.7453C14.5249 14.6707 14.4254 14.5923 14.3302 14.514C14.3124 14.4995 14.2884 14.4966 14.2682 14.5064C11.1952 15.9254 7.82887 15.9254 4.71952 14.5064C4.69933 14.4973 4.67535 14.5004 4.65801 14.5147C4.56301 14.5931 4.46326 14.6707 4.36375 14.7453C4.32931 14.7709 4.33216 14.8244 4.36968 14.8462C4.84302 15.1177 5.33512 15.3566 5.85192 15.5526C5.88541 15.5654 5.90132 15.6036 5.88469 15.6361C5.60539 16.1893 5.27955 16.7153 4.91427 17.2143C4.89836 17.2345 4.87223 17.2438 4.84753 17.2362C3.3026 16.756 1.72821 16.0318 0.103242 14.8386C0.0897043 14.8282 0.0799668 14.8116 0.0785418 14.7942C-0.252533 11.2505 0.422204 7.66234 2.88531 3.98371C2.89125 3.97397 2.90027 3.96637 2.91072 3.96186C4.12268 3.40563 5.4211 2.99642 6.77817 2.76272C6.80287 2.75892 6.82757 2.77032 6.84039 2.79217C7.00807 3.08904 7.19973 3.46976 7.3294 3.78088C8.75986 3.56238 10.2127 3.56238 11.673 3.78088C11.8027 3.47641 11.9877 3.08904 12.1547 2.79217C12.1606 2.78133 12.1698 2.77265 12.181 2.76736C12.1922 2.76207 12.2048 2.76045 12.2169 2.76272C13.5747 2.99713 14.8731 3.40634 16.0841 3.96186C16.0948 3.96637 16.1036 3.97397 16.1088 3.98442V3.98442ZM8.05663 10.7223C8.07159 9.67467 7.30779 8.8078 6.34901 8.8078C5.39806 8.8078 4.64162 9.66707 4.64162 10.7223C4.64162 11.7773 5.41302 12.6365 6.34901 12.6365C7.30019 12.6365 8.05663 11.7773 8.05663 10.7223V10.7223ZM14.3698 10.7223C14.3848 9.67467 13.621 8.8078 12.6625 8.8078C11.7113 8.8078 10.9548 9.66707 10.9548 10.7223C10.9548 11.7773 11.7262 12.6365 12.6625 12.6365C13.621 12.6365 14.3698 11.7773 14.3698 10.7223V10.7223Z"></path></svg>
                    </a>
                    <a href="https://hey.xyz/u/aave" className='flex'>
                        <svg className="h-[22px] overflow-visible fill-secondaryParagraph hover:fill-primaryHeadingGray transition-all ease-in-out duration-100" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.3915 3.97978C13.1293 3.36863 13.9525 3.13611 14.7419 3.19489C15.5839 3.2576 16.3633 3.64948 16.9452 4.2187C17.5272 4.78797 17.927 5.54937 17.991 6.37111C18.0556 7.20034 17.7759 8.06887 17.0387 8.83107C16.9712 8.90127 16.9023 8.97053 16.8319 9.03893C16.4658 9.397 16.0865 9.716 15.7013 10.0001C16.0866 10.2843 16.4659 10.6033 16.8321 10.9615L16.8328 10.9622C16.902 11.0303 16.9702 11.0989 17.0373 11.1679L17.0379 11.1685C17.7755 11.93 18.0555 12.7983 17.9911 13.6275C17.9273 14.4491 17.5277 15.2106 16.9459 15.7801C16.3641 16.3495 15.5849 16.7417 14.7427 16.8047C13.9533 16.8637 13.13 16.6315 12.3918 16.0206C12.3125 16.9627 11.8989 17.696 11.2986 18.2001C10.6584 18.7378 9.82407 19 9.00013 19C8.17627 19 7.34193 18.7378 6.70173 18.2001C6.10134 17.6959 5.68777 16.9625 5.60847 16.0202C4.87073 16.6313 4.04755 16.8639 3.25815 16.8051C2.41604 16.7424 1.63676 16.3505 1.05481 15.7813C0.472811 15.212 0.073 14.4506 0.00899761 13.6289C-0.0555881 12.7997 0.224048 11.9311 0.961353 11.1689C1.02881 11.0987 1.09772 11.0295 1.16809 10.9611C1.5342 10.603 1.91347 10.284 2.29869 9.99987C1.91341 9.71567 1.53409 9.39667 1.16792 9.03847L1.16719 9.0378C1.09797 8.96967 1.0298 8.90113 0.962667 8.83213L0.962127 8.83153C0.224473 8.07 -0.0554403 7.20169 0.00893775 6.37247C0.072724 5.55088 0.472277 4.78938 1.05409 4.21992C1.63587 3.65049 2.41506 3.2583 3.2573 3.19533C4.04668 3.13631 4.86999 3.36855 5.60818 3.9794C5.68755 3.03724 6.10109 2.30397 6.7014 1.79986C7.3416 1.2622 8.17593 1 8.99987 1C9.82373 1 10.6581 1.2622 11.2983 1.79986C11.8987 2.30404 12.3123 3.03744 12.3915 3.97978ZM6.26667 9.2C5.97211 9.2 5.73333 9.4388 5.73333 9.73333V11C5.73333 11.2945 5.97211 11.5333 6.26667 11.5333C6.56122 11.5333 6.8 11.2945 6.8 11V9.73333C6.8 9.4388 6.56122 9.2 6.26667 9.2ZM11.7333 9.2C11.4388 9.2 11.2 9.4388 11.2 9.73333V11C11.2 11.2945 11.4388 11.5333 11.7333 11.5333C12.0279 11.5333 12.2667 11.2945 12.2667 11V9.73333C12.2667 9.4388 12.0279 9.2 11.7333 9.2ZM10.3335 10.6995C10.4357 10.9757 10.2947 11.2826 10.0185 11.3849C9.70053 11.5026 9.35713 11.5667 9 11.5667C8.64287 11.5667 8.29947 11.5026 7.98147 11.3849C7.70527 11.2826 7.56427 10.9757 7.66653 10.6995C7.7688 10.4233 8.07567 10.2823 8.35187 10.3845C8.55307 10.4591 8.77113 10.5 9 10.5C9.22887 10.5 9.44693 10.4591 9.64813 10.3845C9.92433 10.2823 10.2312 10.4233 10.3335 10.6995Z"></path></svg>
                    </a>
                    <a href="https://github.com/aave" className='flex'>
                        <svg className="h-[22px] overflow-visible fill-secondaryParagraph hover:fill-primaryHeadingGray transition-all ease-in-out duration-100" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.793 5.59065C16.0082 4.19852 14.8801 3.04194 13.5216 2.23668C12.1522 1.41504 10.5914 0.987837 9.00431 1.0003C7.41576 0.987069 5.85332 1.41429 4.48261 2.23668C3.12269 3.04124 1.99328 4.19791 1.20768 5.59065C0.405432 6.99312 -0.0116979 8.59161 0.000426427 10.217C-0.0183637 12.1663 0.584285 14.0687 1.71692 15.6355C2.81128 17.2005 4.36547 18.3662 6.15257 18.9625C6.23164 18.9872 6.31529 18.9925 6.39674 18.978C6.47819 18.9634 6.55516 18.9295 6.62142 18.8788C6.67055 18.8336 6.70955 18.7781 6.73577 18.716C6.76199 18.6539 6.7748 18.5868 6.77331 18.5192L6.76717 17.8709C6.76307 17.4626 6.76102 17.1077 6.76102 16.8062L6.49235 16.8575C6.27729 16.8926 6.05944 16.9068 5.84176 16.8997C5.56837 16.8949 5.29585 16.867 5.02697 16.8161C4.74103 16.7621 4.47188 16.6388 4.24204 16.4564C4.00096 16.2697 3.82117 16.0122 3.72666 15.7182L3.60988 15.4422C3.5114 15.2236 3.38759 15.018 3.24112 14.8298C3.10963 14.6378 2.93457 14.4813 2.731 14.3739L2.64935 14.3137C2.59325 14.2721 2.54225 14.2238 2.49746 14.1698C2.45419 14.1196 2.41866 14.0629 2.3921 14.0017C2.36868 13.9453 2.38829 13.8991 2.45092 13.8632C2.55868 13.8189 2.67491 13.8004 2.79071 13.8092L3.02513 13.8452C3.23465 13.9026 3.4316 14.0002 3.60549 14.1329C3.83778 14.2951 4.03185 14.5083 4.17356 14.757C4.32859 15.0567 4.55172 15.3139 4.82416 15.5069C5.04907 15.6694 5.31632 15.7593 5.59153 15.765C5.81566 15.7679 6.03951 15.7477 6.25968 15.7047C6.44165 15.6665 6.61851 15.6061 6.78648 15.5249C6.82524 15.0551 7.0293 14.6157 7.3607 14.2885C6.95556 14.2479 6.55404 14.1757 6.15959 14.0727C5.77464 13.9642 5.40447 13.8069 5.0577 13.6042C4.69472 13.4021 4.37404 13.129 4.11385 12.8003C3.83551 12.4228 3.62719 11.9961 3.49925 11.5415C3.33036 10.958 3.24924 10.3516 3.25868 9.7431C3.23931 8.82641 3.57191 7.93854 4.18497 7.27033C3.89678 6.47492 3.92612 5.59527 4.26663 4.82185C4.61086 4.76481 4.9639 4.82149 5.27457 4.9837C5.61164 5.11197 5.93862 5.26649 6.25266 5.44588C6.45987 5.57357 6.62581 5.68147 6.75049 5.76959C8.2232 5.35357 9.7784 5.35357 11.2511 5.76959L11.6963 5.48185C12.0385 5.27135 12.3995 5.09462 12.7744 4.95403C13.069 4.80746 13.4015 4.76114 13.7236 4.82185C13.8958 5.20356 13.9927 5.61633 14.0089 6.0365C14.025 6.45667 13.9599 6.87596 13.8175 7.27033C14.4305 7.93859 14.7631 8.82643 14.7438 9.7431C14.753 10.3542 14.6719 10.9633 14.5032 11.5496C14.3767 12.0059 14.166 12.4333 13.8825 12.8084C13.6181 13.1335 13.2961 13.4044 12.9334 13.6069C12.5865 13.8095 12.2164 13.9668 11.8315 14.0754C11.4371 14.1788 11.0355 14.2512 10.6304 14.2921C10.8484 14.5134 11.016 14.7813 11.1213 15.0766C11.2267 15.3719 11.2671 15.6874 11.2397 16.0005V18.5327C11.2381 18.5998 11.2504 18.6665 11.2756 18.7285C11.3009 18.7905 11.3386 18.8463 11.3863 18.8923C11.4512 18.9433 11.5272 18.9775 11.6077 18.9921C11.6882 19.0066 11.771 19.0011 11.849 18.976C13.6362 18.3797 15.1904 17.214 16.2847 15.649C17.4193 14.0782 18.0215 12.1707 17.9994 10.217C18.0115 8.59174 17.5947 6.99335 16.793 5.59065V5.59065Z"></path></svg>
                    </a>
                    <a href="https://dune.com/aavelabs" className='flex'>
                    <svg className="h-[22px] overflow-visible fill-secondaryParagraph hover:fill-primaryHeadingGray transition-all ease-in-out duration-100" width="18" height="18" viewBox="0 0.5 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.99998 18.0012C13.9705 18.0012 18 13.9718 18 9.00122C18 8.91852 17.9989 8.83607 17.9966 8.75391L1.57538 14.0895C3.19748 16.4519 5.91779 18.0012 8.99998 18.0012Z" fill-opacity="0.5"></path><path d="M17.9998 9.06516C17.9999 9.04346 18 9.02174 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 10.8888 0.581847 12.6417 1.57608 14.0893L17.9966 8.75391C17.9989 8.83607 18 8.91852 18 9.00122C18 9.02255 17.9999 9.04387 17.9998 9.06516Z"></path></svg>
                    </a>
                </div>
            </footer>
            <Bottom_Bars isInView={isInView}/>
    </section>
  )
}

export default Footer