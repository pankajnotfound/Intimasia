import React, { useEffect, useState } from 'react'

const ScrollHideHeader = () => {

    const[isHeaderHidden, setHeaderHidden] = useState(false);
    const[lastScrollValue, setLastScrollValue] = useState(0);
    const hideThreshold = 100;

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollValue = window.scrollY;
            
            if(currentScrollValue > hideThreshold){
                setHeaderHidden(true);
            }
            else {
                setHeaderHidden(false);
            }
            setLastScrollValue(currentScrollValue)

            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll );
            };
        }
    }, [lastScrollValue]);


  return (
    <div>ScrollHideHeader</div>
  )
}

export default ScrollHideHeader