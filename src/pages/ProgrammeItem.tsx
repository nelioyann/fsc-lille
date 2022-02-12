import { IonAvatar, IonContent, IonItem, IonPage, IonThumbnail } from '@ionic/react';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { getEvent } from '../data/agenda';
import { getSpeakerImage, getSpeakerSummary } from '../data/speakers';
import { Box, Center, Stack } from '../layouts';
import { useParams } from 'react-router';
import Content from '../ui/Content/Content';
import Card from '../components/Cards/Card';
import styled from 'styled-components';
import { Label, SpacingEnum } from '../theme/globalStyles';


const StyledThumbnail = styled(IonThumbnail)`
    --size: clamp(6em ,100%, 14em);
    border: 1px solid black;
`

const ProgrammeItem: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = getEvent(id);
    return (
        <IonPage>
            <Header backButtonLink="/tabs/programme" withBackButton={true} />
            <Content>
                <Stack space={SpacingEnum.s3}>
                    <Box borderWidth="0" padding="0">
                        <StyledThumbnail >
                            <img src={getSpeakerImage(event.speakerId)} />
                        </StyledThumbnail>
                        <Label>{getSpeakerSummary(event.speakerId)}</Label>
                        <Heading level="2">{event.title}</Heading>
                    </Box>
                    <Stack>
                        <Heading level="4">Description</Heading>
                        <IonItem lines="none">
                            {event.description}
                        </IonItem>
                    </Stack>
                    <Box borderWidth="0" padding="0">
                        <Heading level="4">Quand ?</Heading>
                        <IonItem lines="none">
                            {event.date}
                        </IonItem>
                    </Box>
                </Stack>
            </Content>
        </IonPage>
    )
};

export default ProgrammeItem;
