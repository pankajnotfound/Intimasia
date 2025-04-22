import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const Footer = () => {
  return (
    <div className='h-35 w-full bg-[#2e2e2e] flex flex-col content-center justify-center gap-6'>
        <Top />
        <Bottom />
    </div>
  )
}

export default Footer