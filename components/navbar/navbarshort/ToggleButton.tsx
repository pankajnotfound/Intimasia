import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

type PropsDataType = {
  animateCross: boolean;
}

const ToggleButton = (props: PropsDataType) => {

  const animateCross = props.animateCross;

  const [valueOne, setValueOne] = useState(0);
  const [valueTwo, setValueTwo] = useState(0);

  useEffect(() => {
    if (animateCross) {
      setValueOne(135);
      setValueTwo(-135);
    } else {
      setValueOne(0);
      setValueTwo(0);
    }
  }, [animateCross]);

  if (!animateCross) {
    return(
      <div className='w-[1.6rem] h-10 flex flex-col py-2 gap-1 items-center justify-center'>
        <div className='w-[95%] h-[0.2rem] bg-[#666767]'></div>
        <div className='w-[95%] h-[0.13rem] bg-[#666767]'></div>
        <div className='w-[95%] h-[0.2rem] bg-[#666767]'></div>
      </div>
    )
  }

  else {
    return (
      <div className='w-[1.6rem] h-10 flex flex-col py-2 gap-1 items-center justify-center'>
          <motion.div 
            initial = {false}
            animate = {{rotate : valueOne}}
            transition = {{
              duration : 0.2
            }}
            
            className='w-[25px] h-[0.2rem] absolute bg-[#666767]'>
    
          </motion.div>
          <motion.div 
            initial = {false}
            animate = {{rotate : valueTwo}}
            transition = {{
              duration : 0.2
            }}

            className='w-[25px] h-[0.2rem] absolute bg-[#666767]'>
              
          </motion.div>
      </div>
    )
  }
}

export default ToggleButton