import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom, Swiper as SwiperInterface } from 'swiper';


import 'swiper/swiper.min.css';
import 'swiper/modules/autoplay/autoplay.min.css';
import 'swiper/modules/keyboard/keyboard.min.css';
import 'swiper/modules/pagination/pagination.min.css';
import 'swiper/modules/scrollbar/scrollbar.min.css';
import 'swiper/modules/zoom/zoom.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { IonicSlides } from '@ionic/react';
import Card from '../../Cards/Card';
import ProgrammeCard from './ProgrammeCard';
import { EventThemesEnum, getEvents } from '../../../data/events';
import { Stack } from '../../../layouts';

interface IProgrammesSlider {
    theme: "INFLUENCE" | "MOUVEMENT" | "EXPERIMENTATION" | "SOCIETE";
    id: string;
}

const ProgrammesSlider: React.FC<IProgrammesSlider> = ({theme, id}) => {
    const events = getEvents();
    // const theme = "INFLUENCE"
    const [swiperInstance, setSwiperInstance] = useState<SwiperInterface>();
    const handleSwipeNext = () => {
        swiperInstance?.slideNext();
    }
    console.log(theme, events)
    return (
        <Stack>
            {events?.length > 0 ? events
                .filter(event => event.theme === theme)
                .filter(event => event.id !== id)
                .map((event, index) => (
                        <ProgrammeCard key={`programmeCard_${event.id}`} {...event} />
                )) : (
                    <p>Empty</p>
                ) }
        </Stack>
    )
}

export default ProgrammesSlider