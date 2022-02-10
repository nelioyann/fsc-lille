import { IonContent, IonModal, IonPage, useIonModal } from '@ionic/react';
import React, { useState } from 'react';
import SpeakerCard, { ISpeaker } from '../components/Customs/Programmes/SpeakerCard';
import Header from '../components/Headers/Header';
import { getSpeakers } from '../data/speakers';
import { Box, Cluster, Grid } from '../layouts';
import { SpacingEnum } from '../theme/globalStyles';
import Intervenant from './Intervenant';

const Intervenants = () => {
    const speakers = getSpeakers();
    const [selectedSpeaker, setSelectedSpeaker] = useState<ISpeaker>()
    // const [presentSpeaker, dismissSpeaker] = useIonModal(Intervenant);

    return (
        <IonPage>
            <Header noBorder label="Intervenants"/>
            <IonContent>
                <Box borderWidth="0">
                    <Cluster intrinsicWidth space={SpacingEnum.s1}>
                        {speakers.map(speaker=> <SpeakerCard key={`spekerCard_${speaker.id}`} {...speaker} />)}
                    </Cluster>
                </Box>
            </IonContent>
        </IonPage>
    )
};

export default Intervenants;
