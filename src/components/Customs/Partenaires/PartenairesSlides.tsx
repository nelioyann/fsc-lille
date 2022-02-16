import React, { useState } from 'react';
import { IonContent, IonicSlides, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Swiper as SwiperInterface } from 'swiper';


import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';
// import Container from '../../ui/Content/Content';
import PartenairesSlide from './PartenairesSlide';
import mel from "../../../data/partenaires/mel.png"
import anthropoLab from "../../../data/partenaires/anthropoLab.png"
import cristal from "../../../data/partenaires/cristal.png"
import fresnoy from "../../../data/partenaires/fresnoy.png"
import scalab from "../../../data/partenaires/scalab.png"
import univCatho from "../../../data/partenaires/univCatho.png"
import univLille from "../../../data/partenaires/univLille.png"



export interface IPartenairesSlides {
    children?: React.ReactNode
    onSlideChange?: () => {}
}

const options = {
    autoplay: {delay: 10000},
    keyboard: true,
    pagination: false,
    scrollbar: false,
    zoom: true,
    slidesPerView: 3.5,
    spaceBetween: 8,
    watchSlidesProgress: false,
}

const slidesContent = [{
    title: "1. Look around in awe",
    imageUrl: mel
}
, {
    title: "2. Hold your heart with care.",
    imageUrl: anthropoLab
}, {
    title: "3. Cry your heart out",
    imageUrl: cristal
}, {
    title: "2. Hold your heart with care.",
    imageUrl: fresnoy
}, {
    title: "3. Cry your heart out",
    imageUrl: scalab
}, {
    title: "2. Hold your heart with care.",
    imageUrl: univCatho
}, {
    title: "3. Cry your heart out",
    imageUrl: univLille
}
]
// IonicSlides module by importing it from @ionic/react and passing it in as the last item in the modules array:
const SwiperModules = [Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides];

const PartenairesSlides: React.FC<IPartenairesSlides> = ({ }) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();
    const handleSwipeNext = () => {
        swiperInstance?.slideNext();
    }

    const handleSlideChange = (swiper: SwiperInterface) => {
        console.log(swiper.activeIndex);
    }
    return (
        <Swiper onSwiper={(swiper) => { setSwiperInstance(swiper) }} modules={SwiperModules} {...options}>
            {slidesContent.map(({ title, imageUrl }, index) => (
                <SwiperSlide key={`slide_${index}`}>
                    <PartenairesSlide title={title} imageUrl={imageUrl}/>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PartenairesSlides
