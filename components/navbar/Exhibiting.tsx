import React from 'react'
import MenuElement from './MenuElement'

const Exhibiting = () => {
    return (
        <div className='w-full h-full group relative '>
            Exhibiting
            <ul className='w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-5px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black group-hover:scale-100 transition delay-100 origin-top duration-200 '>
                <MenuElement Text="Visitor Profile" />
                <MenuElement Text="Why Exhibit" />
                <MenuElement Text="Event Promotion" />
                <MenuElement Text="Participation Details" />
                <MenuElement Text="Branding Opportinities" />
                <MenuElement Text="Exhibitor Testimionials" />
                <MenuElement Text="Floor Plan" />
        </ul>
        </div>
)
}

export default Exhibiting