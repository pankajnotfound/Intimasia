import React from 'react'
import MenuElement from './MenuElement'

const PracticalInfo = () => {
    return (
        <div className='w-full h-full group relative '>
            Practical Info
            <ul className='w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-5px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black group-hover:scale-100 transition delay-100 origin-top duration-200 '>
                <MenuElement Text="Reaching The Show" />
                <MenuElement Text="Prefered Hotels" />
                <MenuElement Text="Shuttle Service" />
                <MenuElement Text="Visa Invitation" />
        </ul>
        </div>
)
}

export default PracticalInfo