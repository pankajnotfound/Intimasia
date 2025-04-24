'use client';

import { motion } from 'framer-motion'
import React from 'react'
import BlogShort from '../navbarshort/BlogShort'
import ContactShort from '../navbarshort/ContactShort'
import ExhibitingShort from '../navbarshort/ExhibitingShort'
import GetInTouch from '../navbarshort/GetInTouch'
import HomeShort from '../navbarshort/HomeShort'
import HorizontalLine from '../navbarshort/HorizontalLine'
import LoginShort from '../navbarshort/LoginShort'
import NavbarLogoShort from '../navbarshort/NavbarLogoShort'
import PracticalInfoShort from '../navbarshort/PracticalInfoShort'
import PressShort from '../navbarshort/PressShort'
import RegisterButtonShort from '../navbarshort/RegisterButtonShort'
import TheShowShort from '../navbarshort/TheShowShort'
import ToggleButton from '../navbarshort/ToggleButton'
import VisitingShort from '../navbarshort/VisitingShort'

const NavBarLong = (props : any) => {
    const heightRef = props.heightRef;

    const toggleDropdown = props.toggleDropdown;

    const isDropdownActive = props.isDropdownActive;

    const [height, setHeight] = useState(0);

    useEffect(() => {
            if(isDropdownActive && heightRef.current ){
                setHeight(heightRef.current.scrollHeight);
            }
            else {
                setHeight(0);
            }
        }, [isDropdownActive]);


  return (
    <div className='w-full h-fit relative overflow-hidden flex flex-col py-1 bg-linear-170 from-[#f87cb4] to-[#ffc4e4] lg:hidden'>
        <div className='w-full min-h-20 flex px-3 gap-4 text-[1.05rem] justify-between items-center rounded-2xl text-white font-[roboto] font-bold '>
            <NavbarLogoShort />
            <div onClick={toggleDropdown} className=''>
                <ToggleButton />
            </div>
        </div>
        <div className='w-full flex absolute top-21 content-center justify-center'>
            <HorizontalLine />
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
            <div className='w-fit h-fit py-2'>
                <HomeShort />
                <TheShowShort />
                <ExhibitingShort />
                <VisitingShort />
                <PracticalInfoShort />
                <PressShort />
                <BlogShort />
                <ContactShort />
                <RegisterButtonShort />
                <LoginShort />
                <GetInTouch />
            </div>
        </motion.div>
    </div>
  )
}

export default NavBarLong

function useState(arg0: number): [any, any] {
    throw new Error('Function not implemented.')
}


function useEffect(arg0: () => void, arg1: any[]) {
    throw new Error('Function not implemented.')
}
function useRef<T>(arg0: null) {
    throw new Error('Function not implemented.')
}

