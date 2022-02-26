import { IonContent, IonIcon, IonPage, IonPopover, useIonRouter } from '@ionic/react';
import { add, calendarClearOutline, gameControllerOutline, hourglassOutline, pinOutline } from 'ionicons/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Button from '../components/Buttons/Button';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import Tag from '../components/Tag/Tag';
import { EventThemesEnum, filterStands, getEvents } from '../data/events';
import { Box, Center, Cluster, Cover, Stack } from '../layouts';
import { ColorLabelsEnum, ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Content from '../ui/Content/Content';

const Programme = () => {
    const events = getEvents();
    const [showCalendarPopOver, setShowCalendarPopOver] = useState(false);
    return (
        <IonPage>
            <Header mode="ios" label="Programme" icon={calendarClearOutline} iconOnclickHandler={() => setShowCalendarPopOver(true)} />
            <IonPopover isOpen={showCalendarPopOver} dismissOnSelect={true} onClick={() => setShowCalendarPopOver(false)}>
                <Button fill='clear' size='small' icon={add} onClick={() => setShowCalendarPopOver(false)} label="Ajouter au calendrier" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Forum%20des%20Sciences%20Cognitives%20de%20Lille&dates=20220319T090000Z/20220319T170000Z&details=Le%20FSC-Lille%20est%20une%20conférence%20d'une%20journée%20consacrée%20aux%20sciences%20cognitives.%20L'événement%20aura%20lieu%20le%2019%20mars%202022%20à%20Lille.&location=13%20Rue%20de%20Toul,%2059000%20Lille,%20France&trp=true" />
            </IonPopover>
            <Content>
                <Stack space={SpacingEnum.s4}>
                    <Stack>
                        <Heading level="1">Cogni'Quiz</Heading>
                        <Label size="large">Pendant le forum des sciences cognitives la fédération française des sciences de la cognition (FRESCO) organise le Cogni’Quiz,
                            un «question pour un champion» version sciences cognitives </Label>
                        <Box padding='0' borderWidth='0'>
                            <Button fill='outline' icon={gameControllerOutline} label="Inscrivez vous" href="https://forms.gle/RecQuUuYLKvxfaz27" />
                        </Box>
                    </Stack>
                    {events?.length > 0
                        ? (
                            <Stack id="hello" space={SpacingEnum.s2}>
                                <Heading level="1">Mini-conférences</Heading>
                                <Box borderWidth="0" padding="0">
                                    <Label size="large">
                                        Les mini-conférences sont des séries de trois présentations d’une douzaine de minutes suivie
                                        d’une discussion entre les intervenant.e.s et le public.
                                    </Label>
                                    <Label size="large">
                                        Pour chaque thématique, le programme ci-dessous vous indique l’horaire de début de session,
                                        ainsi que les contenus associés comme les ateliers ou les stands.
                                    </Label>
                                </Box>
                                {/* <Button target="_self" href="/tabs/programmes/#mouvement" label="Mouvement"/> */}
                                <Stack space={SpacingEnum.s4}>
                                    {(Object.keys(EventThemesEnum) as Array<keyof typeof EventThemesEnum>).map((theme) => {
                                        let stands = filterStands(theme);
                                        return (
                                            <Stack space={SpacingEnum.s0} id={theme.toLowerCase()} key={`ThemeGroup_${theme}`}>
                                                <Heading level="3">{EventThemesEnum[theme]}</Heading>
                                                <Cluster align="center">
                                                    {/* <Label color={ColorVariablesEnum.MEDIUM}>Stands: </Label> */}
                                                    {stands.length > 0 && (
                                                        stands.map(stand => (
                                                            <Tag key={`stands_${theme}_${stand}`} icon={pinOutline} color={ColorLabelsEnum.DARK} disabled label={stand} />
                                                        ))
                                                    )}
                                                </Cluster>
                                                {events.filter(event => event.theme === theme).map((event, index) => <ProgrammeCard key={`programmeCard_${event.id}`} {...event} />)}
                                            </Stack>)
                                    })}
                                </Stack>
                            </Stack>
                        )
                        : (
                            <p>Rien pour le moment, revennez plus tard</p>
                        )}
                </Stack>

            </Content>
        </IonPage>
    )
};

export default Programme;
