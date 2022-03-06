import {  useIonRouter } from '@ionic/react';
import React from 'react';
import { IWorkshop} from '../../../data/events';
import { getSpeakerImage, getSpeakerSummary } from '../../../data/speakers';
import { Box, Cluster, Stack } from '../../../layouts';
import {  ColorVariablesEnum, SpacingEnum } from '../../../theme/globalStyles';
import Heading from '../../Headings/Heading';
import { StyledCard, StyledAvatar, SpeakerLabel } from './ProgrammeCard';


const WorkshopCard: React.FC<IWorkshop> = ({ title, description, speakersId, id, ...props }) => {
    const router = useIonRouter();

    return (
        <StyledCard  mode="ios" button={true} onClick={() => router.push(`/tabs/programmes/demos/${id}`, "forward", "push")} {...props}>
            <Box borderWidth='0'>
                <Stack space="0">
                    <Cluster justify='flex-start' align='center' space={SpacingEnum['s-1']}>
                        <Cluster space={SpacingEnum['s-4']}>
                            {speakersId.map(speakerId => (
                                <StyledAvatar key={`workshopCard_speaker${speakerId}`}>
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

export default WorkshopCard;
