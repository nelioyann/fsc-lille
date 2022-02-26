import { IonContent, IonIcon, IonModal, IonPage, IonPopover, useIonRouter } from '@ionic/react';
import { add, calendarClearOutline, gameControllerOutline, hourglassOutline, storefrontOutline } from 'ionicons/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Button from '../components/Buttons/Button';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import Tag from '../components/Tag/Tag';
import { EventThemesEnum, filterStands, getEvents } from '../data/events';
import { Box, Center, Cluster, Cover, Stack } from '../layouts';
import { ColorLabelsEnum, ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Content from '../ui/Content/Content';
import "./Programme.css"

const StyledModal = styled(IonModal)`
    --border-radius: ${SpacingEnum.subtleCurve};
    --box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.193) 0px 1px 1px 0px;

`

const Programme = () => {
    const events = getEvents();
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const pageRef = useRef<HTMLElement>()
    return (
        <IonPage ref={pageRef}>
            <Header mode="ios" label="Programme" icon={calendarClearOutline} iconOnclickHandler={() => setShowCalendarModal(true)} />
            <StyledModal
                swipeToClose={true}
                onDidDismiss={() => setShowCalendarModal(false)}
                isOpen={showCalendarModal}
                presentingElement={pageRef.current}
                initialBreakpoint={0.3}
                breakpoints={[0, 0.5, 1]}
            >
                <IonContent>
                    <Cover >
                        <Heading level='5'>Calendrier Google</Heading>
                        <Label>Ajouter cet évènement à mon calendrier</Label>
                        <Cluster justify='space-between'>
                            <Button fill="outline" label="Annuler" onClick={() => setShowCalendarModal(false)} />
                            <Button onClick={() => setShowCalendarModal(false)} label="Ajouter au calendrier" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Forum%20des%20Sciences%20Cognitives%20de%20Lille&dates=20220319T090000Z/20220319T170000Z&details=Le%20FSC-Lille%20est%20une%20conférence%20d'une%20journée%20consacrée%20aux%20sciences%20cognitives.%20L'événement%20aura%20lieu%20le%2019%20mars%202022%20à%20Lille.&location=13%20Rue%20de%20Toul,%2059000%20Lille,%20France&trp=true" />
                        </Cluster>
                    </Cover>
                </IonContent>
            </StyledModal>
            <Content>
                <Stack space={SpacingEnum.s4}>

                    {events?.length > 0
                        ? (
                            <Stack id="hello" space={SpacingEnum.s2}>
                                <Heading color={ColorVariablesEnum.PRIMARY} level="2">Mini-conférences  </Heading>
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
                                                            <Tag key={`stands_${theme}_${stand}`} icon={storefrontOutline} color={ColorLabelsEnum.DARK} disabled label={stand} />
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
                    <Stack>
                        <Heading color={ColorVariablesEnum.PRIMARY} level="2">Animations</Heading>
                        <Heading level="3">16h - Cogni'Quiz</Heading>
                        <Label size="large">Le Cogni'Quizz est un quizz ludique au cours duquel des binômes s'affrontent sur des questions
                            portant sur les sciences de la cognition. Inspiré du célèbre jeu télévisé "Questions pour un
                            champion", il se déroule en trois phases :
                        </Label>
                        <Label size="large">
                            Il nécessite la formation d'une équipe de 2 personnes intéressées par les sciences de la cognition
                            et qui souhaitent tester leurs connaissances de façon ludique ! Il n'est, bien sûr, pas nécessaire
                            d'être étudiant.e en sciences cognitives pour participer, toute personne motivée est la bienvenue !
                        </Label>
                        {/* <Box padding='0' borderWidth='0'> */}
                            <Button color={ColorLabelsEnum.TERTIARY} fill='solid' icon={gameControllerOutline} label="Inscrivez vous" href="https://forms.gle/RecQuUuYLKvxfaz27" />
                        {/* </Box> */}
                    </Stack>
                </Stack>

            </Content>
        </IonPage>
    )
};

export default Programme;
