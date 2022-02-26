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
    autoplay: { delay: 5000 },
    keyboard: true,
    pagination: false,
    scrollbar: false,
    zoom: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 4.5,
            spaceBetween: 30
        }
    },
    watchSlidesProgress: false,
}

const slidesContent = [{
    title: "",
    imageUrl: mel
}
    , {
    title: "",
    imageUrl: anthropoLab
}, {
    title: "",
    imageUrl: cristal
}, {
    title: "",
    imageUrl: fresnoy
}, {
    title: "",
    imageUrl: scalab
}, {
    title: "",
    imageUrl: univCatho
}, {
    title: "",
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
                    <PartenairesSlide title={title} imageUrl={imageUrl} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default PartenairesSlides
