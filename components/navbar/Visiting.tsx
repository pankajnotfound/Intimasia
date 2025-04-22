import React from 'react'
import MenuElement from './MenuElement'

const Visiting = () => {
    return (
        <div className='w-full h-full group relative '>
            Visiting
            <ul className='w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-5px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black group-hover:scale-100 transition delay-100 origin-top duration-200 '>
                <MenuElement Text="Why Visit" />
                <MenuElement Text="Exibitor Profile" />
                <MenuElement Text="Exibitor List" />
                <MenuElement Text="Visitor Testimonials" />
                <MenuElement Text="Events" />
                <MenuElement Text="Speakers" />
                <MenuElement Text="Register Now" />
        </ul>
        </div>
)
}

export default Visiting