import { IonPage, IonContent, IonCard } from '@ionic/react';
import { logoFacebook, logoTwitter } from 'ionicons/icons';
import React from 'react';
import Button from '../components/Buttons/Button';
import Input from '../components/Forms/Input/Input';
import Textarea from '../components/Forms/Input/Textarea';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { Box, Cluster, Cover, Stack } from '../layouts';
import { Label, SpacingEnum } from '../theme/globalStyles';
import CascBanner from "../data/images/casc_banner.jpg"
import Card from '../components/Cards/Card';
import Content from '../ui/Content/Content';


const Contact = () => {
    return (
        <IonPage>
            <Header label="Contactez-nous" />
            <Content>
                    <Cover minHeight="80vh" noPad>
                        <Stack space={SpacingEnum.s3}>
                            
                            <Stack>
                                <Heading level="4">Suivez les dernières informations sur le forum</Heading>
                                <Cluster>
                                    <Button fill="outline" icon={logoTwitter} label="Twitter" />
                                    <Button fill="outline" icon={logoFacebook} label="Facebook" />
                                </Cluster>
                            </Stack>
                            <Stack>
                                <Heading level="4">Prenez contact pour en savoir plus</Heading>
                                <form>
                                    <Stack space={SpacingEnum['s-1']}>
                                        <Input label="Votre adresse mail" name="email" />
                                        <Textarea label="Votre message" name="message" />
                                    <Button label="Envoyer" />
                                    </Stack>
                                </form>
                            </Stack>
                            <Stack>
                                <Heading level="4">A propos de CASC</Heading>
                                <Label>CASC est une association qui réunit les futur(e)s, ancien(ne)s et actuel(le)s étudiant(e)s en Sciences Cognitives et qui a pour but de promouvoir les sciences cognitives, en particulier en région Hauts de France.</Label>
                                <IonCard>
                                    <img src={CascBanner}/>
                                </IonCard>
                            </Stack>
                        </Stack>
                    </Cover>
            </Content>
        </IonPage>
    )
};

export default Contact;
