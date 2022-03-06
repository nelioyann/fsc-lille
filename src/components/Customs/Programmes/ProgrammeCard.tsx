import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, useIonRouter } from '@ionic/react';
import { easelOutline } from 'ionicons/icons';
import React from 'react';
import styled from 'styled-components';
import { getStand, standIds } from '../../../data/events';
import { getSpeakerImage, getSpeakerSummary } from '../../../data/speakers';
import { Box, Cluster, Stack } from '../../../layouts';
import { ColorLabelsEnum, ColorVariablesEnum, Label, SpacingEnum } from '../../../theme/globalStyles';
import Heading from '../../Headings/Heading';
import Tag from '../../Tag/Tag';

export const StyledCard = styled(IonCard)`
margin-left: 0;
margin-right: 0;
margin-bottom: 0;
&:hover{
    transform: translateY(-0.25em);
}

&:focus, &:focus-within{
    box-shadow: 0 0 0 0.15rem ${ColorVariablesEnum.LIGHT}, 0 0 0 0.35rem ${ColorVariablesEnum.PRIMARY};
  }

  `
export const StyledAvatar = styled(IonAvatar)`
  --avatar-size: clamp(2em, 8vw, 3em);
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.193) 0px 1px 1px 0px;
  width: var(--avatar-size) ;
  height: var(--avatar-size); 
  `
export interface IProgrammeCard {
    id: string;
    speakersId: string[];
    title: string;
    description?: string;
    date: string;
    speakerThumbnail?: string;
    standId?: standIds;
    theme: string;
}

export let EventsThemeColorEnum: { [x: string]: ColorLabelsEnum | undefined; } = {
    "INFLUENCE": ColorLabelsEnum.SECONDARY,
    "SOCIETE": ColorLabelsEnum.SUCCESS,
    "EXPERIMENTATION": ColorLabelsEnum.TERTIARY,
    "MOUVEMENT": ColorLabelsEnum.WARNING
}

export const SpeakerLabel = styled(Label)`
    margin-top: 0 ;
    margin-bottom: 0;
    `

const ProgrammeCard: React.FC<IProgrammeCard> = ({ title, date, id, speakersId, theme, standId, ...props }) => {
    const router = useIonRouter();

    return (
        <StyledCard style={{ borderLeft: `3px solid var(--ion-color-${EventsThemeColorEnum[theme]})` }} mode="ios" button={true} onClick={() => router.push(`/tabs/programmes/${id}`, "forward", "push")} {...props}>
            <Box borderWidth='0'>
                <Stack space="0">
                    <Cluster justify='flex-start' align='center' space={SpacingEnum['s-1']}>
                        <Cluster space={SpacingEnum['s-4']}>
                            {speakersId.map(speakerId => (
                                <StyledAvatar key={`programmeCard_speaker${speakerId}`}>
                                    <img src={getSpeakerImage(speakerId)} />
                                </StyledAvatar>
                            ))}
                        </Cluster>
                        <SpeakerLabel color={ColorVariablesEnum.INFO} size="default" >
                            {speakersId.reduce((summaries: string[], speakerId, index) => {
                                summaries.push(getSpeakerSummary(speakerId));
                                return summaries;
                            }, []).join(' & ')}
                        </SpeakerLabel>
                    </Cluster>
                    {title && title !== "" && <Heading level='5'>{title}</Heading>}
                </Stack>
            </Box>
        </StyledCard>
    )
};

export default ProgrammeCard;
