import React from 'react'
import BasicInfo from './BasicInfo'
import LogoText from './LogoText'
import UsefulLinks1 from './UsefulLinks1'
import UsefulLinks2 from './UsefulLinks2'
import FollowUs from './FollowUs'

const Top = () => {
  return (
    <div className='z-[0] w-full min-h-111  flex justify-center' >
        <div className='w-[85%] flex flex-col justify-center items-center pt-10 gap-10 '>
            <div className='w-full'>
                <BasicInfo />
            </div>
            <div className=' w-full flex pt-0 mb-8 justify-start items-start flex-wrap gap-5 lg:justify-between md:justify-center lg:gap-0'>
                <LogoText />
                <UsefulLinks1 />
                <UsefulLinks2 />
                <FollowUs />
            </div>
        </div>
    </div>
  )
}

export default Top