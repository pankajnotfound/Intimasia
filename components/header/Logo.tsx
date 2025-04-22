import React from 'react'
import Logo1 from './Logo1'
import Logo2 from './Logo2'
import Line from './Line'

const Logo = () => {
  return (
    <div className='flex gap-1'>
        <Logo1 />
        <Logo2 />
        <Line />
    </div>
  )
}

export default Logo