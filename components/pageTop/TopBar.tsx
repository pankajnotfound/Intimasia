'use client';

import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import NavBar from '../navbar/navbarlong/NavBar'

const TopBar = () => {

    const[isHeaderHidden, setHeaderHidden] = useState(false);
    const hideThreshold = 120;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollValue = window.scrollY;
            setHeaderHidden(currentScrollValue > hideThreshold)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll );
        };
    }, []);

  return (
    <div className={`z-50 fixed w-full ${ isHeaderHidden ? 'top-[-4rem] lg:top-[-7rem]': 'top-0 lg:top-0'} transition-all ease-in-out duration-300 `}>
        <Header />
        <NavBar />
    </div>
  )
}

export default TopBar