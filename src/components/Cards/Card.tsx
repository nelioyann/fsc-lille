import { IonCard, IonCardContent, IonCardHeader } from '@ionic/react';
import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { ColorVariablesEnum, Label, SpacingEnum } from '../../theme/globalStyles';
import Heading from '../Headings/Heading';

export interface ICard extends HTMLAttributes<HTMLIonCardElement> {
    title?: string;
    subtitle?: string;
    bodyText?: string;
    imageUrl?: string;
    layout?: "image" | "simple";
    size?: "small" | "full";
}

interface CardProps {
    $imageUrl?: string;
    $size?: "small" | "full";
    $layout?: "image" | "simple";

}

enum CardSizesEnum {
    "small" = "20em",
    "full" = "100%"
}

const StyledCardImage = styled.img`
    border-radius: 1em; 
`
const StyledCardHeader = styled(IonCardHeader)`
    width: 100%;
    padding: 0;
`
const StyledCardContent = styled(IonCardContent)`
    padding-left: 0 !important;
    padding-right: 0 !important;

`
const StyledCard = styled(IonCard) <CardProps>`
    background: transparent;
    box-shadow: none;
    border-radius: 1em; 
    ${({ $size }) =>
        $size !== undefined &&
        css`
            max-width: ${CardSizesEnum[$size]};
        `
    }
    ${({ $layout, $imageUrl }) =>
        $layout === "image" &&
        css`
            aspect-ratio: 1/1;
            background-image: ${`url(${$imageUrl})`};
            background-repeat: no-repeat;
            background-size: cover;
            * {
                    color: ${ColorVariablesEnum.LIGHT};
            }
            ${StyledCardImage}{
                display: none;
            }
            ${StyledCardHeader}{
                padding: ${SpacingEnum.s0};
                position: absolute;
                bottom: 0;
                background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.8) 100%);
                
            }
            ${StyledCardContent}{
                height: calc(60px + var(--ion-safe-area-top));
                background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.5) 100%);
                ${Label}{
                    padding: ${SpacingEnum.s0};
                }
            }
        `
    }
`
const CardDefaultProps: ICard = {
    layout: "image",
    title: "Your title",
    subtitle: "Your subtitle",
    size: "small",
    imageUrl: "https://picsum.photos/300"
}

const Card: React.FC<ICard> = ({ bodyText, layout, title, subtitle, imageUrl, size, ...props }) => {
    return (
        <StyledCard button={true} mode="ios" $layout={layout} $imageUrl={imageUrl} $size={size} {...props}>
            {layout === "simple" && <StyledCardImage src={imageUrl} />}
            {title !== "" && subtitle !== "" && (<StyledCardHeader>
                {title && <Heading level="4">{title}</Heading>}
                {subtitle && <Heading level="6">{subtitle}</Heading>}
            </StyledCardHeader>)}
            {bodyText && <StyledCardContent>
                <Label>
                    {bodyText}
                </Label>
            </StyledCardContent>}
        </StyledCard>);
};

Card.defaultProps = CardDefaultProps;
export default Card;
