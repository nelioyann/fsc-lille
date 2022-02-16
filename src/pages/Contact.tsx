import { IonPage, IonContent, IonCard } from '@ionic/react';
import { logoFacebook, logoLinkedin, logoTwitter } from 'ionicons/icons';
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
                            <Heading level="4">Une question ? Contactez l'association CASC</Heading>
                            <Label>CASC est une association qui réunit les futur(e)s, ancien(ne)s et actuel(le)s étudiant(e)s en Sciences Cognitives et qui a pour but de promouvoir les sciences cognitives, en particulier en région Hauts de France.</Label>
                            <Box borderWidth="0" padding="0">

                            <Button fill="outline" href="mailto:contact@fsc-lille.com" label="Send an email tocontact@fsc-lille.com" />
                            </Box>
                            <Heading level="4">Suivez les dernières informations sur le forum</Heading>
                            <Cluster space={SpacingEnum.s0}>
                                <Button href="https://twitter.com/Podcasc" fill="outline" icon={logoTwitter} label="Twitter" />
                                <Button href="https://www.facebook.com/CASC.association" fill="outline" icon={logoFacebook} label="Facebook" />
                                <Button href="https://www.linkedin.com/company/casc-asso/" fill="outline" icon={logoLinkedin} label="LinkedIn" />
                            </Cluster>
                        </Stack>

                        {/* <Stack>

                            <Box borderWidth="0" padding="0">
                                <img src={CascBanner} />
                            </Box>
                        </Stack> */}
                    </Stack>
                </Cover>
            </Content>
        </IonPage>
    )
};

export default Contact;
