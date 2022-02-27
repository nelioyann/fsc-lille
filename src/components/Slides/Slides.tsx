import React, { useState } from 'react';
import { IonContent, IonicSlides, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Swiper as SwiperInterface } from 'swiper';

import "./Slides.css"

import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';
import Container from '../../ui/Content/Content';
import Slide from './Slide';



export interface ISlides {
    children: React.ReactNode
    onSlideChange?: () => {}
}

const options = {
    autoplay: false,
    keyboard: true,
    pagination: false,
    scrollbar: false,
    zoom: true,
    slidesPerView: 1,
    watchSlidesProgress: true,
}

const slidesContent = [{
    title: "1. Look around in awe",
}, {
    title: "2. Hold your heart with care.",
}, {
    title: "3. Cry your heart out",
},

]
// IonicSlides module by importing it from @ionic/react and passing it in as the last item in the modules array:
const SwiperModules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides];

const Slides: React.FC<ISlides> = ({ }) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();
    const handleSwipeNext = () => {
        swiperInstance?.slideNext();
    }

    const handleSlideChange = (swiper: SwiperInterface) => {
        console.log(swiper.activeIndex);
    }
    return (
        <Swiper onSwiper={(swiper) => { setSwiperInstance(swiper) }} modules={SwiperModules} {...options} onSlideChange={handleSlideChange}>
            {/* {slidesContent.map(({ title, lottie }, index) => (
                <SwiperSlide key={`slide_${index}`}>
                    <Slide title={title} isActive={swiperInstance?.activeIndex === index} lottie={lottie} handleSwipeNext={handleSwipeNext} />
                </SwiperSlide>
            ))} */}
        </Swiper>
    )
}

export default Slides
