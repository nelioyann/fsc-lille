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
import styled from 'styled-components';
import { ReactComponent as France } from "../data/icons/France.svg"
import PartenairesSlides from '../components/Customs/Partenaires/PartenairesSlides';
import Tag from '../components/Tag/Tag';
import { calendar, calendarOutline, chevronForward, close, locationOutline, map, pin, ticketOutline, timeOutline } from 'ionicons/icons';
import Modal from '../components/Modal/Modal';
import { useEffect, useState } from 'react';
import { getEvent } from '../data/events';
import ProgrammeCard from '../components/Customs/Programmes/ProgrammeCard';


const StyledLottiePlayer = styled(Player)`
    max-width: 20em;
    max-height: 20em;
    width: 100%;
`
const playerOptions = {
  autoplay: true,
  loop: true,
  keepLastFrame: true,
}
const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useIonRouter();
  const illusionsEvent = getEvent("1");
  const beerEvent = getEvent("3");
  return (
    <IonPage>
      <Header mode="ios" label="FSC Lille 2022" icon={locationOutline} iconOnclickHandler={() => router.push("/tabs/accueil/directions")} />
      <Content>
        <Stack space={SpacingEnum.s5}>
          <Cover noPad minHeight='70vh'>
              <Label size='default'>
                Rendez-vous le 19 mars de 10h à 18h, dans l'atrium de
              <Tag outline={false} onClick={() => router.push("/tabs/accueil/directions")} label="JUNIA HEI à Lille." icon={locationOutline} />
              </Label>
            <Stack data-centered="true">
              <Sidebar sideWidth="20em" >
                <Stack space={SpacingEnum.s2}>
                  <Box borderWidth='0' padding='0'>
                    <Label size="default" color={ColorVariablesEnum.INFO}>
                      CASC et la Fresco présentent la première édition du
                    </Label>
                    <Heading level="2" color={ColorVariablesEnum.PRIMARY}>
                      Forum des Sciences Cognitives de Lille
                    </Heading>
                  </Box>
                  <Label size="large" color={ColorVariablesEnum.TERTIARY}>« Méfions-nous des apparences, quelle réalité percevons-nous ? »</Label>
                  <Stack space={SpacingEnum['s-3']}>
                    <Label size="default">
                      Bienvenue ! Pour cette toute première édition, nous devons vous avertir! Notre cerveau humain, pourtant si évolué,  a souvent tendance à nous faire vivre une réalité qui n’est pas tout à fait, voire pas du tout, … la réalité !
                    </Label>
                    <Label size="default">
                      Au programme, ateliers, démonstrations, mini-conférences, stands des formations universitaires des sciences de la cognition, discussions publiques avec les scientifiques, table ronde d'alumni...
                    </Label>

                  </Stack>
                </Stack>
                {/* <StyledLottiePlayer {...playerOptions} src={OpticalIllusion} /> */}
                <SvgIcon padding={SpacingEnum.s5} size="clamp(5em, 20vw, 20em )" Icon={Logo} />

                {/* <Box> */}
              </Sidebar>
              {/* <Cluster space={SpacingEnum['s-5']}> */}
              {/* <Button icon={calendarOutline} routerLink="/tabs/programmes" expand="block" size="default" label="Découvrez le programme" fill="clear" color={ColorLabelsEnum.TERTIARY} /> */}
              {/* <Button routerLink="/tabs/programmes" expand="block" size="large" label="Ajouter au calendrier" fill="clear" color={ColorLabelsEnum.TERTIARY} /> */}
              {/* </Cluster> */}
            </Stack>
            <Button icon={ticketOutline} href="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022" expand="block" size="large" label="Inscription gratuite" color={ColorLabelsEnum.PRIMARY} />

          </Cover>

          {/* <Stack space={SpacingEnum.s1}>
            <Heading color={ColorVariablesEnum.PRIMARY} level="3">Mini-Conférences</Heading>
            <Label size='default' color={ColorVariablesEnum.INFO}>
              Des illusions visuelles, à l'influence de la musique sur le goût de la bière, notre perception du monde est loin d'en être une restitution unique et partagée à l'identique. Alors, comment mieux percevoir la réalité pour mieux s’y adapter ? Comment l’expérimentation scientifique peut venir à la rescousse de la sensibilisation environnementale ? Et si le regard des artistes était une approche alternative incontournable ?
            </Label>
            <Stack>
              {illusionsEvent && <ProgrammeCard {...illusionsEvent} />}
              {beerEvent && <ProgrammeCard {...beerEvent} />}
              <Cluster justify='space-between' align='center'>
                <Heading color={ColorVariablesEnum.PRIMARY} level="5"> </Heading>
                <Button iconSlot='end' icon={chevronForward} fill="clear" label='voir plus' routerLink='/tabs/programmes' />
              </Cluster>
            </Stack>
          </Stack>
          <Stack space={SpacingEnum.s1}>
            <Heading level="3">Accès libre sur inscription</Heading>
            <IonCard mode="ios" href="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022">
              <Box borderWidth='0'>
                <Stack>
                  <Sidebar side="left" sideWidth="12em">
                    <SvgIcon Icon={Logo} />
                    <Label size='default' color={ColorVariablesEnum.INFO}>Pour répondre et discuter avec vous de ces questions, nous vous invitions à nous rejoindre le 19 mars de 10h à 18h, dans l'atrium de JUNIA HEI à Lille.
                      Accès libre sur inscription.
                    </Label>
                  </Sidebar>
                </Stack>
              </Box>
            </IonCard>
          </Stack> */}
        </Stack>
      </Content>
    </IonPage>
  );
};

export default Home;
