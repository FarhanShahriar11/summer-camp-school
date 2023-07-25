import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';



import slide1 from '../../assets/category/slider7.jpg';
import slide4 from '../../assets/category/slider8.jpg';
import slide3 from '../../assets/category/slider9.jpg';
import slide2 from '../../assets/category/slider4.jpg';
import slide5 from '../../assets/category/slider5.jpg';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';



const Category = () => {
    return (
        <section className='mt-10'>
             <SectionTitle
                heading={"Gallery"}
                subHeading={"Our Gallery Here"}
            ></SectionTitle>
  <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                  
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    
                </SwiperSlide>
            </Swiper>
        </section>
      

    );
};

export default Category;