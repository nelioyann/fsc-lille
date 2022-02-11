import { IonContent, IonModal, IonPage, useIonModal } from '@ionic/react';
import React, { useState } from 'react';
import SpeakerCard, { ISpeaker } from '../components/Customs/Programmes/SpeakerCard';
import Header from '../components/Headers/Header';
import { getSpeakers } from '../data/speakers';
import { Box, Cluster, Grid } from '../layouts';
import { SpacingEnum } from '../theme/globalStyles';
import Content from '../ui/Content/Content';
import Intervenant from './Intervenant';

const Intervenants = () => {
    const speakers = getSpeakers();
    const [selectedSpeaker, setSelectedSpeaker] = useState<ISpeaker>()
    // const [presentSpeaker, dismissSpeaker] = useIonModal(Intervenant);

    return (
        <IonPage>
            <Header label="Intervenants"/>
            <Content>
                    <Cluster intrinsicWidth space={SpacingEnum.s1}>
                        {speakers.map(speaker=> <SpeakerCard key={`spekerCard_${speaker.id}`} {...speaker} />)}
                    </Cluster>
            </Content>
        </IonPage>
    )
};

export default Intervenants;
