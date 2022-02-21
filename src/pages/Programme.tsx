import { IonContent, IonIcon, IonPage, useIonRouter } from '@ionic/react';
import { hourglassOutline } from 'ionicons/icons';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Button from '../components/Buttons/Button';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { EventThemesEnum, getEvents } from '../data/agenda';
import { Box, Center, Cover, Stack } from '../layouts';
import { SpacingEnum } from '../theme/globalStyles';
import Content from '../ui/Content/Content';

const Programme = () => {
    const events = getEvents();
    return (
        <IonPage>
            <Header label="Programme" />
            <Content>
                {events?.length > 0
                    ? (
                        <Stack id="hello" space={SpacingEnum.s4}>
                            <Heading level="2">Mini-conférences</Heading>
                            {/* <Button target="_self" href="/tabs/programmes/#mouvement" label="Mouvement"/> */}
                            <Stack space={SpacingEnum.s4}>
                                {(Object.keys(EventThemesEnum) as Array<keyof typeof EventThemesEnum>).map((key) => {
                                    return (
                                        <Stack id={key.toLowerCase()} key={`ThemeGroup_${key}`}>
                                            <Heading  level="3">{EventThemesEnum[key]}</Heading>
                                            {events.filter(event => event.theme === key).map(event => <ProgrammeCard key={`programmeCard_${event.id}`} {...event} />)}
                                        </Stack>)
                                })}
                            </Stack>
                        </Stack>
                    )
                    : (
                        <p>Empty</p>
                    )}
            </Content>
        </IonPage>
    )
};

export default Programme;
