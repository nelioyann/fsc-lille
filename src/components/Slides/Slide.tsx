import React, { useEffect, useRef, useState } from 'react';
import { IonCard, IonContent, IonPage } from '@ionic/react';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { Box, Cover, Stack } from '../../layouts';
import Heading from '../Headings/Heading';
import Button from '../Buttons/Button';
import { ColorLabelsEnum, SpacingEnum } from '../../theme/globalStyles';
import { Player } from '@lottiefiles/react-lottie-player';
import LaughingEmoji from "../../data/lotties/laughing-emoji.json"
import { AnimationItem } from 'lottie-web';
import styled from 'styled-components';

export interface ISlide {
    title?: string;
    isActive?: boolean;
    lottie?: string | object;
    handleSwipeNext?: () => void;
}

const StyledPlayer = styled(Player)`
    max-width: 20em;
    max-height: 20em;
`

const SlideDefaultProps = {
    title: "Lose your kack for losing things",
    lottie: LaughingEmoji
}

const playerOptions = {
    autoplay: true,
    loop: true,
    keepLastFrame: true,
}

const Slide: React.FC<ISlide> = ({ title, isActive, lottie, handleSwipeNext }) => {
    const [player, setPlayer] = useState<AnimationItem>();
    const [animationLoaded, setAnimationLoaded] = useState(false);

    // useEffect(() => {
    //     if(animationLoaded && isActive) {
    //         player?.play();
    //     }
    // }, [isActive, animationLoaded])
    return (
        <Box borderWidth="0" padding="0">
            <Cover>
                <Stack data-centered>
                    {lottie && <StyledPlayer onEvent={event => {if (event === 'load') setAnimationLoaded(true)}} lottieRef={instance => setPlayer(instance)} {...playerOptions} src={lottie} />}
                    {title && <Heading level="3">{title}</Heading>}
                </Stack>
                <Button onClick={handleSwipeNext} size="large" color={ColorLabelsEnum.DARK} expand="block" label="Continue"></Button>
            </Cover>
        </Box>
    )
}
// Slide.defaultProps = SlideDefaultProps

export default Slide
