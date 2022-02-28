import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import styled, { css } from 'styled-components';
import { AnimationItem } from 'lottie-web';
import { ColorVariablesEnum } from '../../../theme/globalStyles';

interface ITabsAnimatedIcon {
    lottie: string | object;
    title?: string;
    isActive: boolean;
    handleSwipeNext?: () => void;
}
const playerOptions = {
    autoplay: false,
    loop: false,
    keepLastFrame: false,
    speed: 0.5,
    hover: false,
}


const StyledLottiePlayer = styled(Player) <{
    isActive?: boolean;
}>`
    --icon-size: clamp(2em, 8vw, 4em);
    width: var(--icon-size);
    height: var(--icon-size);
    overflow: visible !important;

    /* width: 100%; */
    path{
        stroke: ${ColorVariablesEnum.MEDIUM};
        fill: ${ColorVariablesEnum.MEDIUM};
    }
    ${({ isActive }) => isActive && css`
        path{
            filter: saturate(1.4) ;
            stroke: ${ColorVariablesEnum.PRIMARY};
            fill: ${ColorVariablesEnum.PRIMARY};
        }
    `}
    `

const TabsAnimatedIcon: React.FC<ITabsAnimatedIcon> = ({ lottie, isActive, title, ...props }) => {
    const [player, setPlayer] = useState<AnimationItem>();
    const [animationLoaded, setAnimationLoaded] = useState(false);
    useLayoutEffect(() => {
        if (animationLoaded && isActive) {
            console.log("Will play", title)
            player?.play();
        }
        // else {
        //     player?.stop();
        // }
    }, [isActive, animationLoaded])

    return (
        <StyledLottiePlayer
            onEvent={event => { if (event === 'load') setAnimationLoaded(true) }}
            isActive={isActive}
            lottieRef={instance => setPlayer(instance)}
            {...playerOptions}
            src={lottie}
        />
    )
}

export default TabsAnimatedIcon;