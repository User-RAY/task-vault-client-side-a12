import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Autoplay  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BestCards from '../BestCards/BestCards';


const Testimonial = () => {

    const testimonials = [
        {
          name: "John Doe",
          photo: "https://i.ibb.co.com/JRxm3Bfs/image.png",
          quote: "This platform has completely transformed the way I manage my work-life balance.",
        },
        {
          name: "Jane Smith",
          photo: "https://i.ibb.co.com/Q3CDbGV6/image.png",
          quote: "A wonderful experience! The opportunities here are amazing.",
        },
        {
          name: "Emily Johnson",
          photo: "https://i.ibb.co.com/KcH8m3kP/image.png",
          quote: "I highly recommend this to anyone looking to grow and succeed.",
        },
        {
          name: "Michael Brown",
          photo: "https://i.ibb.co.com/VcNKLjt8/image.png",
          quote: "The intuitive design and ease of use make this platform stand out.",
        },
        {
          name: "Sophia Martinez",
          photo: "https://i.ibb.co.com/V0GBn1Hn/image.png",
          quote: "I’ve earned more in a month here than on other platforms in a year.",
        },
        {
          name: "William Davis",
          photo: "https://i.ibb.co.com/S4DPFjKt/image.png",
          quote: "Customer support is top-notch. They resolved my issue within hours!",
        },
        {
          name: "Olivia Garcia",
          photo: "https://i.ibb.co.com/k2F42t3C/image.png",
          quote: "The community here is fantastic, and I love the collaborative vibe.",
        },
        {
          name: "Liam Wilson",
          photo: "https://i.ibb.co.com/pvxgR1ds/image.png",
          quote: "A perfect platform for anyone seeking flexible work opportunities.",
        },
        {
          name: "Isabella Lee",
          photo: "https://i.ibb.co.com/rKmdgPQd/image.png",
          quote: "The reward system here is fair and motivating. Highly recommended!",
        },
        {
          name: "James Taylor",
          photo: "https://i.ibb.co.com/S4DPFjKt/image.png",
          quote: "I’ve had such a positive experience that I keep coming back for more.",
        },
      ];
      


    return (
        <div>


            <Swiper
                modules={[Navigation, Pagination,  Autoplay ]}
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                  }}
                navigation={{ clickable: true }}
                pagination={{
                    type: 'fraction',
                  }}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                  },
                  1020: {
                    slidesPerView: 2, 
                  },
                  1440: {
                    slidesPerView: 3, 
                  },
                }}  
                style={{ height: '400px' }}
                >

                {

                    testimonials.map((test,index) => <SwiperSlide key={index} className='h-full'><BestCards  best={false} test={test}></BestCards></SwiperSlide>)
                }

            </Swiper>

            
        </div>
    );
};

export default Testimonial;