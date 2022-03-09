import { IonCard, IonContent, IonItem, IonList, IonListHeader, IonModal, IonPage, useIonRouter } from '@ionic/react';
// import { SpacingEnum } from '../theme/globalStyles';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { Box, Center, Cluster, Cover, Sidebar, Stack, Switcher } from '../layouts';
import { ReactComponent as Logo } from "../data/icons/Logo.svg"
import { ColorLabelsEnum, ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';

import Button from '../components/Buttons/Button';
import Content from '../ui/Content/Content';
import { Player } from '@lottiefiles/react-lottie-player';
import styled, { StyledComponent } from 'styled-components';
import { ReactComponent as France } from "../data/icons/France.svg"
import PartenairesSlides from '../components/Customs/Partenaires/PartenairesSlides';
import Tag from '../components/Tag/Tag';
import { calendar, calendarOutline, chevronForward, close, locationOutline, map, pin, ticketOutline, timeOutline } from 'ionicons/icons';
import Modal from '../components/Modal/Modal';
import { useEffect, useRef, useState } from 'react';
import { getEvent } from '../data/events';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';
import ProgrammeList from '../components/Customs/Programmes/ProgrammeList';


const StyledLottiePlayer = styled(Player)`
    max-width: 20em;
    max-height: 20em;
    width: 100%;
`
const PrimaryHeading = styled(Heading)`
  text-transform: uppercase ;

`
const playerOptions = {
  autoplay: true,
  loop: true,
  keepLastFrame: true,
}
const Home: React.FC = () => {
  const router = useIonRouter();
  const registrationRef = useRef<HTMLDivElement>(null);
  const conferencesRef = useRef<HTMLDivElement>(null);
  const agendaRef = useRef<HTMLDivElement>(null);
  const speakersRef = useRef<HTMLDivElement>(null);
  const scrollOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'end',
  }
  const illusionsEvent = getEvent("1");
  const waterEvent = getEvent("4");
  const mouvementEvent = getEvent("7");
  return (
    <IonPage>
      <Header mode="ios" label="FSC Lille 2022" icon={locationOutline} iconOnclickHandler={() => router.push("/tabs/accueil/directions")} />
      <Content>
        <Stack space={SpacingEnum.s5}>
          <Cover noPad minHeight='60vh'>
            <Label size='default'>
              Samedi 19 Mars, 10h à 18h
              <Tag outline={false} onClick={() => router.push("/tabs/accueil/directions")} label="JUNIA HEI" icon={locationOutline} />
            </Label>
            <Stack data-centered="true">
              <Sidebar sideWidth="20em" >
                <Stack space={SpacingEnum.s2}>
                  <Box borderWidth='0' padding='0'>
                    <Label color={ColorVariablesEnum.INFO}>
                      CASC et la Fresco présentent la première édition du
                    </Label>
                    <PrimaryHeading level="2" color={ColorVariablesEnum.PRIMARY}>
                      Forum des Sciences Cognitives de Lille 2022
                    </PrimaryHeading>
                  </Box>
                  <Label size="large" color={ColorVariablesEnum.TERTIARY}>« Méfions-nous des apparences, quelle réalité percevons-nous ? »</Label>
                  <Cluster>
                    <Tag color={ColorLabelsEnum.PRIMARY} onClick={() => agendaRef.current?.scrollIntoView(scrollOptions)} label="1 journée de vulgarisation" />
                    <Tag color={ColorLabelsEnum.TERTIARY} onClick={() => conferencesRef.current?.scrollIntoView(scrollOptions)} label='11 conférences' />
                    <Tag color={ColorLabelsEnum.SUCCESS} onClick={() => registrationRef.current?.scrollIntoView(scrollOptions)} label='Inscription gratuite' />
                    <Tag color={ColorLabelsEnum.DARK} onClick={() => router.push("/tabs/intervenants")} label='16 intervenant.e.s' />
                  </Cluster>
                  <Box borderWidth='0' padding='0'>
                    <Button icon={ticketOutline} href="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022" expand={undefined} size="large" label="Inscription gratuite" color={ColorLabelsEnum.PRIMARY} />
                  </Box>
                </Stack>
                {/* <StyledLottiePlayer {...playerOptions} src={OpticalIllusion} /> */}
                {/* <SvgIcon padding={SpacingEnum.s5} size="clamp(5em, 20vw, 20em )" Icon={Logo} /> */}

                {/* <Box> */}
              </Sidebar>
              {/* <Cluster space={SpacingEnum['s-5']}> */}
              {/* <Button icon={calendarOutline} routerLink="/tabs/programmes" expand="block" size="default" label="Découvrez le programme" fill="clear" color={ColorLabelsEnum.TERTIARY} /> */}
              {/* <Button routerLink="/tabs/programmes" expand="block" size="large" label="Ajouter au calendrier" fill="clear" color={ColorLabelsEnum.TERTIARY} /> */}
              {/* </Cluster> */}

            </Stack>
          </Cover>


          <Stack space={SpacingEnum.s1}>
            <Heading color={ColorVariablesEnum.PRIMARY} level="3">Première édition à Lille</Heading>
            <IonCard mode="ios">
              <Box borderWidth='0'>
                <Sidebar side="left" sideWidth="12em">
                  <SvgIcon Icon={Logo} />
                  <Stack>
                    <Label >
                      Bienvenue ! Pour cette toute première édition, nous devons vous avertir! Notre cerveau humain, pourtant si évolué,  a souvent tendance à nous faire vivre une réalité qui n’est pas tout à fait, voire pas du tout, … la réalité !
                    </Label>
                    <Label >
                      Au programme, ateliers, démonstrations, mini-conférences, stands des formations universitaires des sciences de la cognition, discussions publiques avec les scientifiques, table ronde d'alumni...
                    </Label>
                  </Stack>
                </Sidebar>
              </Box>
            <Cluster justify='flex-end' align='center'>
              <Button iconSlot='end' icon={chevronForward} fill="clear" label="Découvrir le programme" onClick={() => agendaRef.current?.scrollIntoView(scrollOptions)} />
            </Cluster>
            </IonCard>
          </Stack>
          {/* ----------------------------------------------- */}
          {/* <Stack ref={speakersRef} space={SpacingEnum.s1}>
            <Heading color={ColorVariablesEnum.PRIMARY} level='3'>Rencontrez nos intervenant.es</Heading>
          </Stack> */}

          {/* ----------------------------------------------- */}



          <Stack ref={agendaRef} space={SpacingEnum.s1}>
            <Heading color={ColorVariablesEnum.PRIMARY} level="3">Agenda | Samedi 19 Mars 2022</Heading>
            <ProgrammeList />
            <Cluster justify='flex-end' align='center'>
              {/* <Heading color={ColorVariablesEnum.PRIMARY} level="5">Aperçu</Heading> */}
              <Button iconSlot='end' icon={chevronForward} fill="clear" label="voir l'ensemble" routerLink='/tabs/programmes' />
            </Cluster>
          </Stack>
          {/* ----------------------------------------------- */}

          <Stack ref={conferencesRef} space={SpacingEnum.s1}>
            <Heading color={ColorVariablesEnum.PRIMARY} level="3">Mini-conférences</Heading>
            <Label color={ColorVariablesEnum.INFO}>
              Des illusions visuelles, à l'influence de la musique sur le goût de la bière, notre perception du monde est loin d'en être une restitution unique et partagée à l'identique.
            </Label>
            <Label color={ColorVariablesEnum.INFO}>
              Alors, comment mieux percevoir la réalité pour mieux s’y adapter ? Comment l’expérimentation scientifique peut venir à la rescousse de la sensibilisation environnementale ? Et si le regard des artistes était une approche alternative incontournable ?
            </Label>
            <Stack>

              {illusionsEvent && <ProgrammeCard {...illusionsEvent} />}
              {waterEvent && <ProgrammeCard {...waterEvent} />}
              {mouvementEvent && <ProgrammeCard {...mouvementEvent} />}
              <Cluster justify='flex-end' align='center'>
                {/* <Heading color={ColorVariablesEnum.PRIMARY} level="5">Aperçu</Heading> */}
                <Button iconSlot='end' icon={chevronForward} fill="clear" label="voir l'ensemble" routerLink='/tabs/programmes' />
              </Cluster>
            </Stack>
          </Stack>
          <Stack space={SpacingEnum.s1} ref={registrationRef}>
            <Heading color={ColorVariablesEnum.PRIMARY} level="3">Accès libre sur inscription</Heading>
            <IonCard mode="ios" href="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022">
              <Box borderWidth='0'>
                <Stack>
                  <Sidebar side="left" sideWidth="12em">
                    <SvgIcon Icon={Logo} />
                    <Label size='default' color={ColorVariablesEnum.INFO}>Pour répondre et discuter avec vous de ces questions, nous vous invitions à nous rejoindre le 19 mars de 10h à 18h, dans l'atrium de JUNIA HEI à Lille.
                      Accès libre sur inscription.
                    </Label>
                  </Sidebar>
                  <Button icon={ticketOutline} href="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022" expand={undefined} size="large" label="S'inscrire gratuitement" color={ColorLabelsEnum.PRIMARY} />

                </Stack>
              </Box>
            </IonCard>
          </Stack>
          {/* ----------------------------------------------- */}
          <Stack space={SpacingEnum.s1}>
            <Heading color={ColorVariablesEnum.PRIMARY} level="3">Structures participantes</Heading>
            <Box borderWidth="0" padding="0">
              <PartenairesSlides />
            </Box>
          </Stack>
        </Stack>
      </Content>
    </IonPage>
  );
};

export default Home;
