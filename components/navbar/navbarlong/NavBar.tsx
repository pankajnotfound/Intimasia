'use client';

import { motion } from 'framer-motion';
import React, {useEffect, useRef, useState } from 'react'
import Home from './Home'
import TheShow from './TheShow'
import Exhibiting from './Exhibiting'
import Visiting from './Visiting'
import PracticalInfo from './PracticalInfo'
import Press from './Press'
import Blog from './Blog'
import Contact from './Contact'
import RegisterButton from './RegisterButton'
import Login from './Login'
import ToggleButton from '../navbarshort/ToggleButton'
import LoginShort from '../navbarshort/LoginShort';
import BlogShort from '../navbarshort/BlogShort';
import ContactShort from '../navbarshort/ContactShort';
import ExhibitingShort from '../navbarshort/ExhibitingShort';
import HomeShort from '../navbarshort/HomeShort';
import PracticalInfoShort from '../navbarshort/PracticalInfoShort';
import PressShort from '../navbarshort/PressShort';
import RegisterButtonShort from '../navbarshort/RegisterButtonShort';
import TheShowShort from '../navbarshort/TheShowShort';
import VisitingShort from '../navbarshort/VisitingShort';
import NavbarLogoShort from '../navbarshort/NavbarLogoShort';
import GetInTouch from '../navbarshort/GetInTouch';



const NavBar = () => {
    const heightRef = useRef<HTMLDivElement>(null);

    const[activeMenus, setActiveMenus] = useState(0);
    const[isDropdownActive, setDropdown] = useState(false);
    const[height, setHeight] = useState("0");
    
    const toggleDropdown = () => {
        
        if (height == "33.25rem" && isDropdownActive ) {
            setHeight("0");
            setDropdown(false)
        }
        else {
            setHeight("33.25rem");
            setDropdown(true)
        }
        
    }

    useEffect(() => {
        if(!isDropdownActive){
            setActiveMenus(0);
            console.log("done")
        }
        return () => {
            
        };
    }, [isDropdownActive]);


    console.log(isDropdownActive)
    console.log(activeMenus);


  return (
    <div className=' w-full h-[3.6rem] relative z-50 flex flex-wrap items-center align-middle justify-center md:bg-linear-170 from-[#f168aa] to-[#d71974] uppercase md:h-22 lg:h-[3.6rem] lg:content-center'>
        <motion.ul
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                transition: {
                    staggerChildren: 0.1,
                },
                },
            }}

            className='w-[70%] min-h-20 h-auto hidden gap-4 max-w-300 py-4 ml-2 text-[1.05rem] items-center justify-center rounded-2xl text-white font-[roboto] font-bold lg:flex lg:gap-2 lg:w-auto xl:gap-4 2xl:gap-[1.1rem] lg:text-[1.05rem]'>
                
            {[Home, TheShow, Exhibiting, Visiting, PracticalInfo, Press, Blog, Contact, RegisterButton, Login].map(
                (Component, i) => (
                <motion.li
                    key={i}
                    variants={{
                        hidden: { opacity: 0, x: 40 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}>
                    <Component />
                </motion.li>
                )
            )}
        </motion.ul>
        <div className='w-full h-fit z-50 relative overflow-hidden flex flex-col py-1 bg-linear-170 from-[#f87cb4] to-[#ffc4e4] lg:hidden'>
            <div className='w-full min-h-20 flex px-3 gap-4 text-[1.05rem] justify-between items-center rounded-2xl text-white font-[roboto] font-bold '>
                <NavbarLogoShort />
                <div onClick={toggleDropdown} className=''>
                    <ToggleButton animateCross = {isDropdownActive} />
                </div>
            </div>
            
            <motion.div 
                initial = {false}
                animate = {{maxHeight: height}}
                transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                }}
            
                ref={heightRef}
                className={`w-full px-3 flex overflow-hidden bg-none flex-col lg:hidden `}>
                <div className='w-full h-fit pt-2 max-h-133 overflow-scroll border-t-1'>
                    <HomeShort/>
                    <TheShowShort numberOfMenusActive = {activeMenus} setActiveMenus = {setActiveMenus} />
                    <ExhibitingShort numberOfMenusActive = {activeMenus} setActiveMenus = {setActiveMenus} />
                    <VisitingShort numberOfMenusActive = {activeMenus} setActiveMenus = {setActiveMenus} />
                    <PracticalInfoShort numberOfMenusActive = {activeMenus} setActiveMenus = {setActiveMenus} />
                    <PressShort numberOfMenusActive = {activeMenus} setActiveMenus = {setActiveMenus} />
                    <BlogShort />
                    <ContactShort />
                    <RegisterButtonShort />
                    <LoginShort />
                    <GetInTouch />
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default NavBar