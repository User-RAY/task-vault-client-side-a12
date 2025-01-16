import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Hero = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination,  Autoplay ]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                navigation={{ clickable: true }}
                pagination={{ clickable: true }}

                >
                <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/gWr8gSc/jake-blucker-Sz-Npy-QMb8-W4-unsplash-1.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex flex-col justify-center items-center max-h-[40rem] min-h-[40rem] w-full text-5xl text-white mx-auto text-center bg-black/[.3]'><h1>Discover Opportunities</h1><p className='text-base mt-2'>Complete Tasks and Earn Rewards</p></div></div></SwiperSlide>
                <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/1mYYY8q/avi-richards-Z3own-ETsd-NQ-unsplash-1.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex flex-col justify-center items-center max-h-[40rem] min-h-[40rem] w-full text-5xl text-white mx-auto text-center bg-black/[.3]'><h1>Work from Anywhere</h1><p className='text-base mt-2'>Flexible Tasks, Anytime, Anywhere</p></div></div></SwiperSlide>
                <SwiperSlide><div className={`bg-[url('https://i.ibb.co.com/vLJ8Ygs/alex-G3-Ko-Cp8-Et-Es-unsplash-1.jpg')] max-h-[40rem] min-h-[40rem] bg-fixed bg-center bg-origin-border bg-no-repeat bg-cover`}><div className='flex flex-col justify-center items-center max-h-[40rem] min-h-[40rem] w-full text-5xl text-white mx-auto text-center bg-black/[.3]'><h1>Maximize Your Potential</h1><p className='text-base mt-2'>Join a Thriving Community of Earners</p></div></div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Hero;