import React, { useState } from 'react'
import MenuElement from './MenuElement';
import { ROUTES } from '@/constant/routes';

type PropsDataType = {
    numberOfMenusActive : number;
    setActiveMenus : (value:number)=> void;
}

const TheShowShort = (props : PropsDataType) => {

    const [menuOpened, setMenuOpen] = useState(false);
    const numberOfMenusActive = props.numberOfMenusActive;

    const menuNumberHandler = () => {
        if(menuOpened && numberOfMenusActive == 1){
            setMenuOpen(false);
        }
        if(menuOpened){
            props.setActiveMenus(1);
        }
        else {
            props.setActiveMenus(1)
            setMenuOpen(true);
        }    
    }


    return (
        <div className={`w-full h-[80%] text-white text-[0.9rem] font-bold text-center flex items-center text-nowrap delay-100 transition ease-in-out duration-300 lg:hidden `}>
            <div className='w-full flex flex-col cursor-pointer'>
                <div onClick={menuNumberHandler} className={`w-fit h-full px-2 py-2.5 rounded-sm relative transition delay-100 origin-top duration-200 ${(menuOpened && numberOfMenusActive == 1 ) ? "bg-[#C82D78]" : "" }`}>
                    The Show
                </div>
                <ul className={`w-full relative flex flex-col gap-0 rounded-b-md overflow-hidden normal-case font-sans text-sm font-normal bg-white text-black transition delay-100 origin-top duration-200 ${(menuOpened && numberOfMenusActive == 1 )? " w-100 h-fit" : "scale-y-0 w-0 h-0 " } `}>
                    <MenuElement Text="About The Show" Path = {ROUTES.ABOUT} />
                    <MenuElement Text="Why India" Path = {ROUTES.WHYINDIA} />
                    <MenuElement Text="Highlights" Path = {ROUTES.HIGHLIGHTS} />
                    <MenuElement Text="Video Gallery" Path = {ROUTES.VIDEOGALLERY} />
                    <MenuElement Text="Photo Gallery" Path = {ROUTES.PHOTOGALLERY} />
                    <MenuElement Text="Sponsers" Path = {ROUTES.SPONSERS} />
                    <MenuElement Text="Partners" Path = {ROUTES.PARTNERS} />
                    <MenuElement Text="Organizers" Path = {ROUTES.ORGANIZERS} />
                </ul>
            </div>
        </div>
    )
}

export default TheShowShort