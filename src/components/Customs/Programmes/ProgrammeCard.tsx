import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { getSpeakerImage } from '../../../data/speakers';
import { Cluster, Stack } from '../../../layouts';
import { ColorLabelsEnum, Label } from '../../../theme/globalStyles';
import Heading from '../../Headings/Heading';
import Tag from '../../Tag/Tag';

const StyledCard = styled(IonCard)`
margin-left: 0;
margin-right: 0;

`
export interface IProgrammeCard {
    id: string;
    speakerId: string;
    title: string;
    description?: string;
    date?: string;
    speakerThumbnail?: string;
    theme: string;
}

let EventsThemeColorEnum: { [x: string]: ColorLabelsEnum | undefined; } = {
    "INFLUENCE" : ColorLabelsEnum.SECONDARY,
    "SOCIETE" : ColorLabelsEnum.SUCCESS,
    "EXPERIMENTATION" : ColorLabelsEnum.TERTIARY,
    "MOUVEMENT" : ColorLabelsEnum.WARNING
}

const ProgrammeCard: React.FC<IProgrammeCard> = ({ title, description, date, id, speakerId,theme, ...props }) => {
    return (
        <StyledCard mode="ios" button={true} routerLink={`/tabs/programmes/${id}`} {...props}>
            <Stack space="0">
                <IonCardHeader>
                    <IonAvatar>
                        <img src={getSpeakerImage(speakerId)} />
                    </IonAvatar>
                    {title && title !== "" && <IonCardTitle>{title}</IonCardTitle>}
                    {/* {description && description !== "" && <IonCardSubtitle>{description}</IonCardSubtitle>} */}
                </IonCardHeader>
                <IonCardContent>
                    <Cluster align="center" justify="space-between">
                        <Label>{date}</Label>
                        <Tag color={EventsThemeColorEnum[theme]} icon={undefined} disabled label={theme}/>
                    </Cluster>
                </IonCardContent>
            </Stack>
        </StyledCard>
    )
};

export default ProgrammeCard;
