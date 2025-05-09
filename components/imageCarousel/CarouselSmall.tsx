'use client';
import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image1 from "../../public/resources/carouselimage1small.jpeg"
import Image2 from "../../public/resources/carouselimage2small.jpeg"
import Image3 from "../../public/resources/carouselimage3small.jpeg"
import Image4 from "../../public/resources/carouselimage4small.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const CarouselSmall = () => {

    const Images = [ Image1, Image2, Image3, Image4]
    const[imageIndex, changeImageIndex] = useState(0);

  return (
    <div>
        <div className='w-[100vw]  relative h-fit overflow-hidden bg-white xl:w-[100vw]' >
            <Swiper 
                className='w-[100%] z-0'
                cssMode={true}
                draggable={false}
                navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                modules={[Autoplay, Navigation, Mousewheel, Keyboard]}
                spaceBetween={0}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                slidesPerView={1}
                loop={true}
                onSlideChange={()=> {console.log("Slide changed")}}
                
            >
                <SwiperSlide>
                    <img src={Image1.src} alt="" className='w-[100vw]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2.src} alt="" className='w-[100vw]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image3.src} alt="" className='w-[100vw]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image4.src} alt="" className='w-[100vw]' />
                </SwiperSlide>
            <div className='w-40 h-13 z-50 absolute right-24 bottom-3 hidden justify-center content-center gap-2 md:flex sxl:right-43 sxl:bottom-5 '>
                <div className=' custom-prev w-[32%] group bg-white/5 flex justify-center items-center rounded-full hover:bg-white/8'>
                    <FontAwesomeIcon icon={faAngleLeft} size="xs" color='white' className='opacity-60 hover:text-white group-hover:opacity-100'/>
                </div>
                <div className=' custom-next w-[32%] group bg-white/5 flex justify-center items-center rounded-full hover:bg-white/8'>
                    <FontAwesomeIcon icon={faAngleRight} size="xs" color='white' className='opacity-60 hover:text-white group-hover:opacity-100'/>
                </div>
            </div>
            </Swiper>
        </div>
    </div>
  )
}

export default CarouselSmall