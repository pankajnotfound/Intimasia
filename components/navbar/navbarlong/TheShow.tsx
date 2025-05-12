"use client";

import React, { useState } from 'react'
import MenuElement from './MenuElement';
import { ROUTES } from '@/constant/routes'

const TheShow = () => {

    const [dropdownOpen, toggleDropdownOpen] = useState(false);

    if(dropdownOpen == true ){
        setTimeout(() => {
            toggleDropdownOpen(false);
        }, 100);
    }
    

    return (
        <div className={`w-fit h-[80%] group rounded-sm text-center hidden items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] lg:flex`}>
            <div className='w-full flex items-center justify-center p-2 cursor-pointer lg:p-[0.6rem] xl:p-2'>
                <div className='w-full h-full relative '>
                    The Show
                    <ul className={`w-60 absolute flex flex-col gap-0 scale-y-0 top-8 left-[-7px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black transition delay-100 origin-top duration-200 ${dropdownOpen ? 'scale-y-0 hidden':' flex group-hover:scale-y-100'}`}>
                        <MenuElement Text="About The Show" Path = {ROUTES.ABOUT} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Why India" Path = {ROUTES.WHYINDIA} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Highlights" Path = {ROUTES.HIGHLIGHTS} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Video Gallery" Path = {ROUTES.VIDEOGALLERY} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Photo Gallery" Path = {ROUTES.PHOTOGALLERY} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Sponsers" Path = {ROUTES.SPONSERS} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Partners" Path = {ROUTES.PARTNERS} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Organizers" Path = {ROUTES.ORGANIZERS} autoClose = {toggleDropdownOpen} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TheShow