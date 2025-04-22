import React from 'react'
import PP from './PP'
import TandC from './TandC'
import SiteMap from './SiteMap'

const Bottom = () => {
  return (
    <div className='text-[#878787] flex content-center justify-center gap-3 text-[1.23rem]'>
        <TandC />
        <PP />
        <SiteMap />
    </div>
  )
}

export default Bottom