import React from 'react'
import MenuElement from './MenuElement'

const PressShort = (props : any) => {
    return (
        <div className={`w-fit h-[80%] text-white text-[0.9rem] font-bold rounded-sm text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] lg:hidden`}>
            <div className='w-full flex items-center justify-center px-2 py-2.5 cursor-pointer lg:p-[0.6rem] xl:p-2'>
                <div className='w-full h-full group relative '>
                    Press
                    <ul className='w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-5px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black group-hover:scale-100 transition delay-100 origin-top duration-200 '>
                        <MenuElement Text="Press Releases" />
                        <MenuElement Text="Media Gallery" />
                        <MenuElement Text="Media Coverages" />
                        <MenuElement Text="Press Contact" />
                    </ul>
                </div>
            </div>
        </div>
)
}

export default PressShort