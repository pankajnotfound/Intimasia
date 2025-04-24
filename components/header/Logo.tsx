import React from 'react'
import Logo1 from './Logo1'
import Logo2 from './Logo2'
import Line from './Line'

const Logo = () => {
  return (
    <div className=' relative hidden gap-1 md:hidden lg:flex'>
        <Logo1 />
        <Logo2 />
        <Line />
    </div>
  )
}

export default Logo