import { IonAvatar, IonContent, IonPage } from '@ionic/react';
import { logoLinkedin, logoTwitter } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import Button from '../components/Buttons/Button';
import { ISpeaker } from '../components/Customs/Programmes/SpeakerCard';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { getSpeaker } from '../data/speakers';
import { Box, Center, Cluster, Stack } from '../layouts';
import { Label } from '../theme/globalStyles';

const Intervenant = () => {
    const { id } = useParams<{ id: string }>();
    const speaker = getSpeaker(id)
    console.log("Speaker from Intervenant ", speaker);
    return (
        <IonPage>
            <Header noBorder label="Intervenant" withBackButton={true} />
            <IonContent>
                <Box >
                    {speaker ? (<Stack>
                        {/* <Center> */}
                            <Box maxContent>

                                <IonAvatar>
                                    <img src={speaker.photoUrl} alt={`${speaker.firstName} ${speaker.lastName}`} />
                                </IonAvatar>
                            </Box>
                            <Box padding="0" borderWidth="0">
                                <Heading level="4">{`${speaker.firstName} ${speaker.lastName}`}</Heading>
                                <Label>{speaker.biography}</Label>
                            </Box>
                            <Cluster>
                                {speaker.twitter && <Button icon={logoTwitter} label="Twitter" />}
                                {speaker.linkedin && <Button icon={logoLinkedin} label="LinkedIn" />}
                            </Cluster>
                        {/* </Center> */}
                    </Stack>) : (
                        <Stack>
                            <Heading level="2">Intervenant</Heading>
                        </Stack>
                    )}
                </Box>
            </IonContent>
        </IonPage>
    )
};

export default Intervenant;