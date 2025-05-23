'use client';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image1 from "../../public/resources/carouselimage1.jpeg"
import Image2 from "../../public/resources/carouselimage2.jpeg"
import Image3 from "../../public/resources/carouselimage3.jpeg"
import Image4 from "../../public/resources/carouselimage4.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import { ROUTES } from '@/constant/routes';
import Image from 'next/image';

const CarouselLarge = () => {

  return (
    <div>
        <div className='w-[100vw] relative h-fit overflow-hidden bg-white' >
            <Swiper 
                className=' relative w-[100%] z-0'
                cssMode={true}
                draggable={false}
                navigation={{ nextEl: '.custom-next', prevEl: '.custom-prev' }}
                pagination={{ clickable: true, el: '.custom-pagination' }}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
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
                    <Link href={ROUTES.REGISTER}>
                        <Image src={Image1.src} alt="" width={10000} height={400} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={ROUTES.WHYINDIA}>
                        <Image src={Image2.src} alt="" width={10000} height={400} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={ROUTES.WHYVISIT}>
                        <Image src={Image3.src} alt="" width={10000} height={400} />
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href={ROUTES.ABOUT}>
                        <Image src={Image4.src} alt="" width={10000} height={400} />
                    </Link>
                </SwiperSlide>
            <div className='w-40 h-13 z-50 absolute right-24 bottom-3 flex justify-center content-center gap-2 sxl:right-43 sxl:bottom-5 '>
                <div className=' custom-prev w-[32%] group bg-white/5 flex justify-center items-center rounded-full hover:bg-white/8'>
                    <FontAwesomeIcon icon={faAngleLeft} size="xs" color='white' className='opacity-60 hover:text-white group-hover:opacity-100'/>
                </div>
                <div className=' custom-next w-[32%] group bg-white/5 flex justify-center items-center rounded-full hover:bg-white/8'>
                    <FontAwesomeIcon icon={faAngleRight} size="xs" color='white' className='opacity-60 hover:text-white group-hover:opacity-100'/>
                </div>
            </div>
            </Swiper>
            <div className='custom-pagination bg-white/25 !w-23 !h-6 !z-50 !absolute content-center justify-around align-middle items-center px-2 !left-45 !bottom-15 rounded-2xl sxl:left-45 sxl:bottom-15 lg:flex'>
            </div>
        </div>
    </div>
  )
}

export default CarouselLarge