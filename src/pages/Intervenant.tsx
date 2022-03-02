import { IonAvatar, IonBreadcrumb, IonBreadcrumbs, IonContent, IonPage } from '@ionic/react';
import { logoLinkedin, logoTwitter } from 'ionicons/icons';
import React from 'react';
import { useParams } from 'react-router';
import Button from '../components/Buttons/Button';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { getCompanyName } from '../data/events';
import { getSpeaker, getSpeakerImage } from '../data/speakers';
import { Box, Center, Cluster, Stack } from '../layouts';
import { Label } from '../theme/globalStyles';
import Content from '../ui/Content/Content';
import { StyledThumbnail } from './ProgrammeItem';

const Intervenant = () => {
    const { id } = useParams<{ id: string }>();
    const speaker = getSpeaker(id)
    console.log("Speaker from Intervenant ", speaker);
    return (
        <IonPage>
            <Header mode='ios' label="Intervenant" withBackButton={true} />
            <Content>
                {speaker ? (
                    <Stack>
                        <IonBreadcrumbs mode="ios">
                            <IonBreadcrumb>Intervenants</IonBreadcrumb>
                            {/* <IonBreadcrumb>Conférences</IonBreadcrumb> */}
                            <IonBreadcrumb>{`${speaker.firstName} ${speaker.lastName}`}</IonBreadcrumb>
                        </IonBreadcrumbs>
                        {/* <Box maxContent padding='0'> */}
                        <StyledThumbnail key={`programmeItem_Image${id}`}>
                            <img src={speaker.photoUrl} />
                        </StyledThumbnail>
                        {/* </Box> */}
                        <Box padding="0" borderWidth="0">
                            <Heading level="4">{`${speaker.firstName} ${speaker.lastName} ${speaker.companyId && `- ${getCompanyName(speaker.companyId)}`}`}</Heading>
                            {speaker.companyId && <Label size="large">{getCompanyName(speaker.companyId)}</Label>}
                            <Label>{speaker.biography}</Label>
                        </Box>
                        {speaker.twitter || speaker.linkedin &&
                            (<Cluster>
                                {speaker.twitter && <Button icon={logoTwitter} label="Twitter" />}
                                {speaker.linkedin && <Button icon={logoLinkedin} label="LinkedIn" />}
                            </Cluster>)}
                        {/* <iframe style={{minHeight: "600px"}} src="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022" /> */}
                    </Stack>) : (
                    <Stack>
                        <Heading level="2">Intervenant</Heading>
                    </Stack>
                )}
            </Content>
        </IonPage>
    )
};

export default Intervenant;
