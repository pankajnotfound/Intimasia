import React from 'react'
import MenuElement from './MenuElement'

const Visiting = (props : any) => {
    return (
        <div className={`w-fit h-[80%] rounded-sm text-center hidden items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] lg:flex`}>
            <div className='w-full flex items-center justify-center p-2 cursor-pointer lg:p-[0.6rem] xl:p-2'>
                <div className='w-full h-full group relative '>
                    Visiting
                    <ul className='w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-7px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black group-hover:scale-100 transition delay-100 origin-top duration-200 '>
                        <MenuElement Text="Why Visit" />
                        <MenuElement Text="Exibitor Profile" />
                        <MenuElement Text="Exibitor List" />
                        <MenuElement Text="Visitor Testimonials" />
                        <MenuElement Text="Events" />
                        <MenuElement Text="Speakers" />
                        <MenuElement Text="Register Now" />
                    </ul>
                </div>
            </div>
        </div>
)
}

export default Visiting