import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { hourglassOutline } from 'ionicons/icons';
import React from 'react';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { getEvents } from '../data/agenda';
import { Box, Center, Cover, Stack } from '../layouts';
import Content from '../ui/Content/Content';

const Programme = () => {
    const events = getEvents()
    return (
        <IonPage>
            <Header label="Programme" />
            <Content>
                    {events?.length > 0
                        ? (
                            <Stack>
                            <Heading level="2">Conférences</Heading>
                            <Heading level="3">Perception</Heading>
                            <Stack>
                                {events.map(event => <ProgrammeCard key={`programmeCard_${event.id}`} {...event} />)}
                            </Stack>
                            </Stack>
                        )
                        : (
                            <p>Empty</p>
                        )}
            </Content>
        </IonPage>
    )
};

export default Programme;
