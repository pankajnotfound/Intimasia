'use client';

import React, { useState } from 'react'


const CarouselImages = ( {Images} : any) => {



    const[imageIndex, changeImageIndex] = useState(0);

    const PreviousImageChanger = () => { 
        changeImageIndex( index => {
            if(index === 0){
                return Images.length - 1;
            }
            return index - 1
        }
        );
    }

    const NextImageChanger = () => { 
        changeImageIndex( index => {
            if(index === Images.length -1 ){
                return 0;
            }
            return index + 1
        }
        );
    }

  return (
    <div className='flex w-full h-fit'>
        <img src={Images[imageIndex].src} alt="" />
        <div className='w-40 h-15 bg-red-300 absolute right-40 bottom-30 flex justify-center content-center gap-1'>
            <div onClick={PreviousImageChanger} className='w-[40%] bg-white'>
                
            </div>
            <div onClick={NextImageChanger} className='w-[40%] bg-white'>

            </div>
        </div>
    </div>
  )
}

export default CarouselImages