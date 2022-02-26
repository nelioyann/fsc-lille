import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonRouter } from '@ionic/react';
import React from 'react';
import styled from 'styled-components';
import { getSpeakerImage, getSpeakerSummary } from '../../../data/speakers';
import { Box, Cluster, Stack } from '../../../layouts';
import { ColorLabelsEnum, ColorVariablesEnum, Label } from '../../../theme/globalStyles';
import Heading from '../../Headings/Heading';
import Tag from '../../Tag/Tag';

const StyledCard = styled(IonCard)`
margin-left: 0;
margin-right: 0;
margin-bottom: 0;

&:focus, &:focus-within{
    box-shadow: 0 0 0 0.15rem ${ColorVariablesEnum.LIGHT}, 0 0 0 0.35rem ${ColorVariablesEnum.PRIMARY};
  }

  `
const StyledAvatar = styled(IonAvatar)`
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.193) 0px 1px 1px 0px;
    
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

export let EventsThemeColorEnum: { [x: string]: ColorLabelsEnum | undefined; } = {
    "INFLUENCE": ColorLabelsEnum.SECONDARY,
    "SOCIETE": ColorLabelsEnum.SUCCESS,
    "EXPERIMENTATION": ColorLabelsEnum.TERTIARY,
    "MOUVEMENT": ColorLabelsEnum.WARNING
}

const ProgrammeCard: React.FC<IProgrammeCard> = ({ title, description, date, id, speakersId, theme, ...props }) => {
    const router = useIonRouter();

    return (
        <StyledCard style={{ borderLeft: `3px solid var(--ion-color-${EventsThemeColorEnum[theme]})` }} mode="ios" button={true} onClick={() => router.push(`/tabs/programmes/${id}`, "forward", "push")} {...props}>
            <Stack space="0">
                <IonCardHeader>
                    <Cluster justify='space-between' align='center'>
                        <Cluster>
                            {speakersId.map(speakerId => (
                                <StyledAvatar key={`programmeCard_speaker${speakerId}`}>
                                    <img src={getSpeakerImage(speakerId)} />
                                </StyledAvatar>
                            ))}
                        </Cluster>
                        <Tag color={EventsThemeColorEnum[theme]} icon={undefined} disabled label={date} />

                    </Cluster>

                    {/* {description && description !== "" && <IonCardSubtitle>{description}</IonCardSubtitle>} */}
                </IonCardHeader>
                <IonCardContent>
                    <Cluster>
                        {speakersId.map((speakerId, index) => (
                            <Label size="large" key={`programmeItem_Summary${speakerId}`}>{`${index > 0 ? ", " : ""} ${getSpeakerSummary(speakerId)} `} </Label>
                        ))}
                    </Cluster>
                    {title && title !== "" && <IonCardTitle>{title}</IonCardTitle>}
                    {/* <Cluster>
                        {speakersId.map((speakerId, index) => (
                            <Label size="large" key={`programmeItem_Summary${speakerId}`}>{`${index > 0 ? ", " : ""} ${getSpeakerSummary(speakerId)} `} </Label>
                        ))}
                    </Cluster> */}
                    {/* <Cluster align="center" justify="space-between">
                        <Label>{date}</Label>
                        <Tag color={EventsThemeColorEnum[theme]} icon={undefined} disabled label={date}/>
                    </Cluster> */}
                </IonCardContent>
            </Stack>
        </StyledCard>
    )
};

export default ProgrammeCard;
