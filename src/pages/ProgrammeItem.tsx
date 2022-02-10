import { IonAvatar, IonContent, IonItem, IonPage } from '@ionic/react';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { getEvent } from '../data/agenda';
import { getSpeakerImage, getSpeakerSummary } from '../data/speakers';
import { Box, Center } from '../layouts';
import { useParams } from 'react-router';

const ProgrammeItem: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const event = getEvent(id);
    return (
        <IonPage>
            <Header noBorder label={event.title} backButtonLink="/programme" withBackButton={true} />
            <IonContent>
                <Box borderWidth="0">
                    {/* <Center intrinsic={true}> */}
                        <Box borderWidth="0">
                            <IonAvatar>
                                {/* getSpeakerImage(id) */}
                                <img src={getSpeakerImage(event.speakerId)} />
                            </IonAvatar>
                            <Heading level="2">{event.title}</Heading>
                            <Heading level="3">{getSpeakerSummary(event.speakerId)}</Heading>
                        </Box>
                        <Box borderWidth="0">
                            <Heading level="4">Description</Heading>
                            <IonItem lines="none">
                                {event.description}
                            </IonItem>
                        </Box>
                        <Box borderWidth="0">
                            <Heading level="4">Quand ?</Heading>
                            <IonItem lines="none">
                                {event.date}
                            </IonItem>
                        </Box>
                    {/* </Center> */}
                </Box>
            </IonContent>
        </IonPage>
    )
};

export default ProgrammeItem;
