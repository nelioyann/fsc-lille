import { IonAccordion, IonAccordionGroup, IonContent, IonItem, IonModal, IonPage } from '@ionic/react';
import { calendarClearOutline, gameControllerOutline} from 'ionicons/icons';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../components/Buttons/Button';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';
import WorkshopCard from '../components/Customs/Programmes/WorkshopCard';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import { EventThemesEnum, getEvents, getWorkshops } from '../data/events';
import { Box,  Cluster, Cover, Stack } from '../layouts';
import { ColorLabelsEnum, ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Content from '../ui/Content/Content';
import "./Programme.css"

const StyledModal = styled(IonModal)`
    --border-radius: ${SpacingEnum.subtleCurve};
    --box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.193) 0px 1px 1px 0px;

`
const Programme = () => {
    const events = getEvents();
    const workshops = getWorkshops();
    const [showCalendarModal, setShowCalendarModal] = useState(false);
    const pageRef = useRef<HTMLElement>()
    return (
        <IonPage ref={pageRef}>
            <Header mode="ios" label="Programme" icon={calendarClearOutline} iconOnclickHandler={() => setShowCalendarModal(true)} />
            <Content>
                <StyledModal
                    swipeToClose={true}
                    onDidDismiss={() => setShowCalendarModal(false)}
                    isOpen={showCalendarModal}
                    initialBreakpoint={0.3}
                    breakpoints={[0, 0.3, 1]}
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
                <Stack space={SpacingEnum.s4}>
                    {events?.length > 0
                        ? (
                            <Stack space={SpacingEnum.s2}>
                                <Box borderWidth='0' padding='0'>
                                    <Heading color={ColorVariablesEnum.PRIMARY} level="2"> Stands, ateliers et démos</Heading>
                                </Box>
                                <Stack space="0">
                                    <IonAccordionGroup>
                                        <IonAccordion value="workshops">
                                            <IonItem slot='header'>
                                                <Label size='large'>Ateliers et démonstrations</Label>
                                            </IonItem>
                                            <Box slot='content' borderWidth='0'>
                                                {workshops.map((workshop, index) => (
                                                    <WorkshopCard key={`workshop_Accordion${index}`}  {...workshop} />
                                                ))}
                                            </Box>
                                        </IonAccordion>
                                    </IonAccordionGroup>
                                </Stack>
                                <Box borderWidth="0" padding="0">
                                    <Heading color={ColorVariablesEnum.PRIMARY} level="2">Mini-conférences</Heading>
                                    <Label  color={ColorVariablesEnum.INFO}>
                                        Des illusions visuelles, à l'influence de la musique sur le goût de la bière, notre perception du monde est loin d'en être une restitution unique et partagée à l'identique. Alors, comment mieux percevoir la réalité pour mieux s’y adapter ? Comment l’expérimentation scientifique peut venir à la rescousse de la sensibilisation environnementale ? Et si le regard des artistes était une approche alternative incontournable ?
                                    </Label>
                                </Box>
                                <Stack space="0">
                                    <IonAccordionGroup>
                                        {(Object.keys(EventThemesEnum) as Array<keyof typeof EventThemesEnum>).map((theme) => {
                                            return (
                                                <Stack space={SpacingEnum['s-5']} id={theme.toLowerCase()} key={`ThemeGroup_${theme}`}>
                                                    <IonAccordion value={theme}>
                                                        <IonItem slot='header'>
                                                            <Label size='large'>{EventThemesEnum[theme]}</Label>
                                                        </IonItem>
                                                        <Box slot='content' borderWidth='0'>
                                                            <Stack space={SpacingEnum.s2}>
                                                                {events.filter(event => event.theme === theme).map((event, index) => <ProgrammeCard key={`programmeCard_${event.id}`} {...event} />)}
                                                            </Stack>
                                                        </Box>
                                                    </IonAccordion>
                                                </Stack>)
                                        })}
                                    </IonAccordionGroup>
                                </Stack>
                            </Stack>
                        )
                        : (
                            <p>Rien pour le moment, revennez plus tard</p>
                        )}
                    <Stack>
                        <Heading color={ColorVariablesEnum.PRIMARY} level="2">Animations</Heading>
                        <IonAccordionGroup>
                            <IonAccordion value="cogniquiz">
                                <IonItem slot='header'>
                                    <Label size='large'>16h - Cogni'Quiz</Label>
                                </IonItem>
                                <Box slot='content' borderWidth='0'>
                                    <Label >Le Cogni'Quiz est un quizz ludique au cours duquel des binômes s'affrontent sur des questions
                                        portant sur les sciences de la cognition. Inspiré du célèbre jeu télévisé "Questions pour un
                                        champion", il se déroule en trois phases :
                                    </Label>
                                    <Label >
                                        Il nécessite la formation d'une équipe de 2 personnes intéressées par les sciences de la cognition
                                        et qui souhaitent tester leurs connaissances de façon ludique ! Il n'est, bien sûr, pas nécessaire
                                        d'être étudiant.e en sciences cognitives pour participer, toute personne motivée est la bienvenue !
                                    </Label>
                                    <Button color={ColorLabelsEnum.TERTIARY} fill='solid' icon={gameControllerOutline} label="Inscrivez vous" href="https://forms.gle/RecQuUuYLKvxfaz27" />
                                </Box>
                            </IonAccordion>
                            <IonAccordion value="alumnis">
                                <IonItem slot='header'>
                                    <Label size='large'>17h - Table Ronde des alumnis</Label>
                                </IonItem>
                                <Box slot='content' borderWidth='0'>
                                    <Label >
                                        Afin de connaître les débouchés après une licence/un master autour des sciences co à Lille,
                                        5 à 6 alumni répondront aux questions des étudiant·e·s sur leur métier au quotidien, leurs parcours académique et professionnel et donneront leurs conseils avisés.
                                    </Label>
                                </Box>
                            </IonAccordion>
                        </IonAccordionGroup>
                    </Stack>

                </Stack>

            </Content>
        </IonPage>
    )
};

export default Programme;
