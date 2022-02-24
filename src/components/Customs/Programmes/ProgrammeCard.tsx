import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonRouter } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { getSpeakerImage } from '../../../data/speakers';
import { Cluster, Stack } from '../../../layouts';
import { ColorLabelsEnum, ColorVariablesEnum, Label } from '../../../theme/globalStyles';
import Heading from '../../Headings/Heading';
import Tag from '../../Tag/Tag';

const StyledCard = styled(IonCard)`
margin-left: 0;
margin-right: 0;

&:focus, &:focus-within{
    box-shadow: 0 0 0 0.15rem ${ColorVariablesEnum.LIGHT}, 0 0 0 0.35rem ${ColorVariablesEnum.PRIMARY};
  }

`
export interface IProgrammeCard {
    id: string;
    speakersId: string[];
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

const ProgrammeCard: React.FC<IProgrammeCard> = ({ title, description, date, id, speakersId,theme, ...props }) => {
    const router = useIonRouter();

    return (
        <StyledCard style={{borderLeft: `3px solid var(--ion-color-${EventsThemeColorEnum[theme]})`}} mode="ios" button={true} onClick={ ()=> router.push(`/tabs/programmes/${id}`, "forward", "pop")} {...props}>
            <Stack space="0">
                <IonCardHeader>
                    {/* <IonAvatar>
                        <img src={getSpeakerImage(speakerId)} />
                    </IonAvatar> */}
                    {title && title !== "" && <IonCardTitle>{title}</IonCardTitle>}
                    {/* {description && description !== "" && <IonCardSubtitle>{description}</IonCardSubtitle>} */}
                </IonCardHeader>
                {/* <IonCardContent>
                    <Cluster align="center" justify="space-between">
                        <Label>{date}</Label>
                        <Tag color={EventsThemeColorEnum[theme]} icon={undefined} disabled label={theme}/>
                    </Cluster>
                </IonCardContent> */}
            </Stack>
        </StyledCard>
    )
};

export default ProgrammeCard;
