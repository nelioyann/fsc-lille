import { IonContent, IonModal, IonPage, useIonModal } from '@ionic/react';
import React, { useState } from 'react';
import SpeakerCard, { ISpeaker } from '../components/Customs/Programmes/SpeakerCard';
import Header from '../components/Headers/Header';
import { getSpeakers } from '../data/speakers';
import { Box, Cluster, Grid, Stack } from '../layouts';
import { SpacingEnum } from '../theme/globalStyles';
import Content from '../ui/Content/Content';
import Intervenant from './Intervenant';



const Intervenants = () => {
    // const speakers = getSpeakers();
    const speakers = getSpeakers();

    return (
        <IonPage>
            <Header mode="ios" label="Intervenants" />
            <Content>
                <Stack>

                    <Grid min="14em" space={SpacingEnum.s1}>
                        {speakers.map(speaker => <SpeakerCard key={`speakerCard_${speaker.id}`} {...speaker} />)}
                    </Grid>
                </Stack>
            </Content>
        </IonPage>
    )
};

export default Intervenants;
