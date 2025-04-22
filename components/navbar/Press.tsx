import React from 'react'
import MenuElement from './MenuElement'

const Press = () => {
    return (
        <div className='w-full h-full group relative '>
            Press
            <ul className='w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-5px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black group-hover:scale-100 transition delay-100 origin-top duration-200 '>
                <MenuElement Text="Press Releases" />
                <MenuElement Text="Media Gallery" />
                <MenuElement Text="Media Coverages" />
                <MenuElement Text="Press Contact" />
        </ul>
        </div>
)
}

export default Press