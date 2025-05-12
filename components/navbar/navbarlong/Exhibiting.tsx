import React, { useState } from 'react'
import MenuElement from './MenuElement'
import { ROUTES } from '@/constant/routes'

const Exhibiting = () => {

    const [dropdownOpen, toggleDropdownOpen] = useState(false);
    
        if(dropdownOpen == true ){
            setTimeout(() => {
                toggleDropdownOpen(false);
            }, 100);
        }

    return (
        <div className={`w-fit h-[80%] group rounded-sm text-center hidden items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] lg:flex`}>
            <div className='w-full flex items-center justify-center p-2 cursor-pointer lg:p-[0.6rem] xl:p-2'>
                <div className='w-full h-full  relative '>
                    Exhibiting
                    <ul className={`w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-7px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black transition delay-100 origin-top duration-200 ${dropdownOpen ? 'scale-y-0 hidden':' flex scale-y-0 group-hover:scale-y-100'}`}>
                        <MenuElement Text="Visitor Profile" Path = {ROUTES.VISITORPROFILE} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Why Exhibit" Path = {ROUTES.WHYEXHIBIT} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Event Promotion" Path = {ROUTES.EVENTPROMOTION} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Participation Details" Path = {ROUTES.PARTICIPATIONDETAILS} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Branding Opportinities" Path = {ROUTES.BRANDINGOPPORTUNITIES} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Exhibitor Testimonials" Path = {ROUTES.EXHIBITORTESTIMONIALS} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Floor Plan" Path = {ROUTES.FLOORPLAN} autoClose = {toggleDropdownOpen} />
                    </ul>
                </div>
            </div>
        </div>
)
}

export default Exhibiting