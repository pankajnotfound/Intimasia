import React, { useState } from 'react'
import MenuElement from './MenuElement'

const PressShort = (props : any) => {

    const [menuOpened, setMenuOpen] = useState(false);
    const numberOfMenusActive = props.numberOfMenusActive;


    const menuNumberHandler = () => {
        if(menuOpened && numberOfMenusActive == 5){
            setMenuOpen(false);
        }
        if(menuOpened){
            props.setActiveMenus(5);
        }
        else {
            props.setActiveMenus(5)
            setMenuOpen(true);
        }    
    }

    
    return (
        <div className={`w-full h-[80%] text-white text-[0.9rem] font-bold text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 lg:hidden `}>
            <div className='w-full flex flex-col cursor-pointer'>
                <div onClick={menuNumberHandler} className={`w-fit h-full px-2 py-2.5 rounded-sm relative transition delay-100 origin-top duration-200 ${(menuOpened && numberOfMenusActive == 5 ) ? "bg-[#C82D78]" : "" }`}>
                    Press
                </div>
                <ul className={`w-full relative flex flex-col gap-0 rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black transition delay-100 origin-top duration-200 ${(menuOpened && numberOfMenusActive == 5 ) ? " w-100 h-fit" : "scale-y-0 w-0 h-0 " }`}>
                    <MenuElement Text="Press Releases" />
                    <MenuElement Text="Media Gallery" />
                    <MenuElement Text="Media Coverages" />
                    <MenuElement Text="Press Contact" />
                </ul>
            </div>
        </div>
)
}

export default PressShort