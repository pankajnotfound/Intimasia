import React from 'react'
import PP from './PP'
import TandC from './TandC'
import SiteMap from './SiteMap'
import BottomText from './BottomText'

const Bottom = () => {
  return (
    <div className='min-h-33 w-full bg-[#2e2e2e] p-10 flex flex-col content-center justify-center gap-4 md:p-0'>
      <div>
        <BottomText />
      </div>
      <div className='text-[#878787] flex content-center justify-center gap-4 text-wrap md:text-nowrap text-[1.23rem]'>
        <TandC />
        <PP />
        <SiteMap />
      </div>
        
    </div>
  )
}

export default Bottom