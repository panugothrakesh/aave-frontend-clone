import { motion } from 'framer-motion';

function Volume({isInView}:{isInView : boolean}) {

    const inView = {
        initial: {x: -177, opacity:0},
        animate: { x : isInView ? 0 : -177,opacity: isInView ? 1 : 0,
        transition: {duration: .6, ease: 'easeInOut', once: true}}
    }

    const inView2 = {
        initial: {x: 177, opacity:0},
        animate: { x : isInView ? 0 : 177,opacity: isInView ? 1 : 0,
        transition: {duration: .6, ease: 'easeInOut', once: true}}
    }
    
    const to_and_fro = {
        initial: {x:  0},
        animate: { x : isInView ? [0, 354, 708] : 0,
        transition: {duration: 5, ease: 'easeInOut', repeat: Infinity, delay:.8}}
    }

    const to_and_fro2 = {
        initial: {x: 0},
        animate: { x : isInView ?  [0, -354, -708]: 0,
        transition: {duration: 5, ease: 'easeInOut', repeat: Infinity, delay:.8}}
    }
    return (
    <svg className='w-full h-auto' width="457" height="250" viewBox="545 0 457 250" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="400%" height="100%" fill="#63BBB6" />
        <motion.g initial="initial" animate="animate" id="bottom" variants={inView} style={{ transformOrigin: '770.75px 62.5px' }}>
            <motion.g initial="initial" animate="animate" id="top" variants={to_and_fro} style={{ transformOrigin: '770.75px 62.5px' }}>
                <rect id="Rectangle 22445" x="771" width="770" height="125" fill="#1F807B" />
                <rect id="Rectangle 22448" x="63" width="354" height="125" fill="#1F807B" />
                <rect id="Rectangle 22447" width="354" height="125" transform="matrix(-1 0 0 1 771 0)" fill="#63BBB6" />
                <g id="Group 1171279177">
                    <circle id="Ellipse 3340" cx="62.5" cy="62.5" r="62.5" transform="matrix(1 0 0 -1 708.5 125)" fill="#1F807B" />
                    <path id="Ellipse 3341" d="M771 0C805.518 0 833.5 27.9822 833.5 62.5C833.5 97.0178 805.518 125 771 125L771 0Z" fill="#9DEBE7" />
                </g>
                <g id="Group 1171279178">
                    <circle id="Ellipse 3340_2" cx="62.5" cy="62.5" r="62.5" transform="matrix(1 0 0 -1 354.5 125)" fill="#9DEBE7" />
                    <path id="Ellipse 3341_2" d="M417 0C451.518 0 479.5 27.9822 479.5 62.5C479.5 97.0178 451.518 125 417 125L417 0Z" fill="#1F807B" />
                </g>
                <g id="Group 1171279179">
                    <circle id="Ellipse 3340_3" cx="62.5" cy="62.5" r="62.5" transform="matrix(1 0 0 -1 0.5 125)" fill="#1F807B" />
                    <path id="Ellipse 3341_3" d="M63 0C97.5178 0 125.5 27.9822 125.5 62.5C125.5 97.0178 97.5178 125 63 125L63 0Z" fill="#9DEBE7" />
                </g>
            </motion.g>
        </motion.g>
        <motion.g initial="initial" animate="animate" variants={inView2}>
            <motion.g initial="initial" animate="animate" id="bottom" variants={to_and_fro2} style={{  transformOrigin: '771.25px 187.5px' }}>
                <rect id="Rectangle 22446" width="354" height="125" transform="matrix(-1 0 0 1 1125 125)" fill="#63BBB6" />
                <rect id="Rectangle 22445_2" width="770" height="125" transform="matrix(-1 0 0 1 771 125)" fill="#1F807B" />
                <rect id="Rectangle 22447_2" width="354" height="125" transform="matrix(-1 0 0 1 1479 125)" fill="#1F807B" />
                <g id="Group 1171279176">
                    <circle id="Ellipse 3340_4" cx="771" cy="187.5" r="62.5" transform="rotate(180 771 187.5)" fill="#1F807B" />
                    <path id="Ellipse 3341_4" d="M771 125C736.482 125 708.5 152.982 708.5 187.5C708.5 222.018 736.482 250 771 250L771 125Z" fill="#9DEBE7" />
                </g>
                <g id="Group 1171279177_2">
                    <circle id="Ellipse 3340_5" cx="1125" cy="187.5" r="62.5" transform="rotate(180 1125 187.5)" fill="#9DEBE7" />
                    <path id="Ellipse 3341_5" d="M1125 125C1090.48 125 1062.5 152.982 1062.5 187.5C1062.5 222.018 1090.48 250 1125 250L1125 125Z" fill="#1F807B" />
                </g>
                <g id="Group 1171279178_2">
                    <circle id="Ellipse 3340_6" cx="1479" cy="187.5" r="62.5" transform="rotate(180 1479 187.5)" fill="#1F807B" />
                    <path id="Ellipse 3341_6" d="M1479 125C1444.48 125 1416.5 152.982 1416.5 187.5C1416.5 222.018 1444.48 250 1479 250L1479 125Z" fill="#9DEBE7" />
                </g>
            </motion.g>
        </motion.g>
    </svg>
  )
}

export default Volume