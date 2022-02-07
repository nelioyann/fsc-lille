import { IonContent, IonIcon, IonPage } from '@ionic/react';
import { hourglassOutline } from 'ionicons/icons';
import React from 'react';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { Center, Cover } from '../layouts';

const Programme = () => {
    return (
        <IonPage>
            <Header label="Programme" mode="ios"/>
            <IonContent>
                <Cover>
                    <Center data-centered>
                        <Heading level="4">En préparation...</Heading>
                    </Center>
                </Cover>
            </IonContent>
        </IonPage>
    )
};

export default Programme;
