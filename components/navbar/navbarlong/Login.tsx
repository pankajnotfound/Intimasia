import React, { useState } from 'react'
import MenuElement from './MenuElement'
import { ROUTES } from '@/constant/routes';
import Image from 'next/image';

const Login = () => {

    const [dropdownOpen, toggleDropdownOpen] = useState(false);

    if(dropdownOpen == true ){
        setTimeout(() => {
            toggleDropdownOpen(false);
        }, 100);
    }
    
        
    return (
        <div className={`rounded-full text-center hidden items-center text-nowrap delay-100 transition ease-in-out duration-300 hover:bg-[#C82D78] lg:flex `}>
            <div className='w-full flex items-center justify-center cursor-pointer '>
                <div className='w-full h-full group relative flex text-[0.98rem] row space-between gap-4'>
                    <div className='w-8 h-8 hidden items-center justify-center rounded-full border-1 border-white delay-100 transition ease-in-out duration-300 lg:flex '>
                        <Image src="/resources/user.png" alt="User" width={16} height={48} className='w-4' />
                    </div>
                    <ul className={`w-60 absolute flex flex-col gap-1 scale-y-0 top-8 left-[-95px] rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black transition delay-100 origin-top duration-200 ${dropdownOpen ? 'scale-y-0 hidden':' flex scale-y-0 group-hover:scale-y-100'} `}>
                        <MenuElement Text="Visitor Login" Path= {ROUTES.VISITORLOGIN} autoClose = {toggleDropdownOpen} />
                        <MenuElement Text="Exibitor Login" Path= {ROUTES.EXHIBITORLOGIN} autoClose = {toggleDropdownOpen} />
                    </ul>
                </div>
            </div>
        </div>
)
}

export default Login