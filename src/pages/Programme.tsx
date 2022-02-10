import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { hourglassOutline } from 'ionicons/icons';
import React from 'react';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { getEvents } from '../data/agenda';
import { Box, Center, Cover, Stack } from '../layouts';

const Programme = () => {
    const events = getEvents()
    return (
        <IonPage>
            <Header noBorder label="Programme" />
            <IonContent>
                <Box borderWidth="0">
                    {events?.length > 0
                        ? (
                            <Stack>
                                <ProgrammeCard title="title" description="Ceci est une description" date="12h - 14h" id="1" />
                            </Stack>
                        )
                        : (
                            <p>Empty</p>
                        )}
                </Box>
            </IonContent>
        </IonPage>
    )
};

export default Programme;
