import { IonPage, IonContent, IonCard } from '@ionic/react';
import { logoFacebook, logoTwitter } from 'ionicons/icons';
import React from 'react';
import Button from '../components/Buttons/Button';
import Input from '../components/Forms/Input/Input';
import Textarea from '../components/Forms/Input/Textarea';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { Box, Cluster, Cover, Stack } from '../layouts';
import { SpacingEnum } from '../theme/globalStyles';
import CascBanner from "../data/images/casc_banner.jpg"
import Card from '../components/Cards/Card';


const Contact = () => {
    return (
        <IonPage>
            <Header label="Contactez-nous" />
            <IonContent>
                <Box borderWidth="0">
                    <Cover minHeight="80vh">
                        <Stack space={SpacingEnum.s3}>
                            
                            <Box borderWidth="0" padding="0">
                                <Heading level="4">Suivez les dernières informations sur le forum</Heading>
                                <Cluster>
                                    <Button icon={logoTwitter} label="Twitter" />
                                    <Button icon={logoFacebook} label="Facebook" />
                                </Cluster>
                            </Box>
                            <Box borderWidth="0" padding="0">
                                <Heading level="4">Prenez contact pour en savoir plus</Heading>
                                <form>
                                    <Stack space={SpacingEnum['s-3']}>
                                        <Input label="Votre adresse mail" name="email" />
                                        <Textarea label="Votre message" name="message" />
                                    </Stack>
                                    <Button label="Envoyer" />
                                </form>
                            </Box>
                            <Box borderWidth="0" padding="0">
                                <Heading level="4">A propos de CASC</Heading>
                                <IonCard>
                                    <img src={CascBanner}/>
                                </IonCard>
                            </Box>
                        </Stack>
                    </Cover>
                </Box>
            </IonContent>
        </IonPage>
    )
};

export default Contact;
