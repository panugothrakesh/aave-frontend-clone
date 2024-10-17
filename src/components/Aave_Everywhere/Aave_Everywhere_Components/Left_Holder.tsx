import React from 'react'
import buttonsData from '../../../assets/Data/Buttons_Data'
import Holder_Button from './Holder_Button'

function Left_Holder({isInView}: {isInView : boolean}) {
    
  return (
    <div className='grid grid-cols-3 grid-rows-2 sm:grid-rows-3 gap-[9px]'>
        {buttonsData.map((button, index) => (
            <Holder_Button key={index} Text={button.text} delay={button.delay} hidden={button.hidden} isInView={isInView}>
                {button.svg}
            </Holder_Button>
        ))}
    </div>
  )
}

export default Left_Holder