import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { getSpeakerImage } from '../../../data/speakers';
import { Stack } from '../../../layouts';
import Heading from '../../Headings/Heading';

const StyledCard = styled(IonCard)`
margin-left: 0;
margin-right: 0;

`
export interface IProgrammeCard {
    id: string;
    title: string;
    description?: string;
    date?: string;
    speakerThumbnail?: string;
    category?: string;
}
const ProgrammeCard: React.FC<IProgrammeCard> = ({ title, description, date, id, ...props }) => {
    return (
        <StyledCard mode="ios" button={true} routerLink={`/tabs/programmes/${id}`} {...props}>
            <Stack space="0">
                <IonCardHeader>
                    <IonAvatar>
                        <img src={getSpeakerImage(id)} />
                    </IonAvatar>
                    {title && title !== "" && <IonCardTitle>{title}</IonCardTitle>}
                    {/* {description && description !== "" && <IonCardSubtitle>{description}</IonCardSubtitle>} */}
                </IonCardHeader>
                <IonCardContent>
                    {date}
                </IonCardContent>
            </Stack>
        </StyledCard>
    )
};

export default ProgrammeCard;
