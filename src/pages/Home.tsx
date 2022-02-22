import { IonCard, IonContent, IonItem, IonList, IonListHeader, IonModal, IonPage } from '@ionic/react';
// import { SpacingEnum } from '../theme/globalStyles';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { Box, Center, Cluster, Cover, Sidebar, Stack, Switcher } from '../layouts';
import { ReactComponent as Logo } from "../data/icons/Logo.svg"
import { ColorLabelsEnum, ColorVariablesEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Card from '../components/Cards/Card';
import Chairs from "../data/images/chair_room.jpg"
import Rubix from "../data/images/rubix.jpg"
import Stands from "../data/images/stands.jpg"
import Button from '../components/Buttons/Button';
import Content from '../ui/Content/Content';
import OpticalIllusion from "../data/lotties/optical-illusion.json"
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';
import { ReactComponent as France } from "../data/icons/France.svg"
import PartenairesSlides from '../components/Customs/Partenaires/PartenairesSlides';
import Tag from '../components/Tag/Tag';
import { calendar, close, locationOutline, map, pin, ticketOutline, timeOutline } from 'ionicons/icons';
import Modal from '../components/Modal/Modal';
import { useEffect, useState } from 'react';


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
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    console.log("Home")
  }, [])
  return (
    <IonPage>
      <Header label="Accueil" icon={locationOutline} iconOnclickHandler={() => setShowModal(true)} />
      <Content>
        <Stack space={SpacingEnum.s5}>
          <Cover noPad minHeight='80vh'>
            <Box borderWidth="0" padding="0">

              <Label size="large">
                CASC et la FRESCO présentent la première édition du
              </Label>
            </Box>

            <Stack data-centered="true">
              <Sidebar sideWidth="20em" >
                <Stack space={SpacingEnum.s3}>
                  <Heading level="1">
                    FORUM DES SCIENCES COGNITIVES DE LILLE
                  </Heading>
                  {/* <Heading level="2" color={ColorLabelsEnum.TERTIARY}>“Méfions-nous des apparences, quelle réalité percevons-nous ?”.</Heading> */}
                  <Label size="large">
                    Retrouvez nous pour une journée de vulgarisation des sciences cognitives, rythmée par des conférences, des animations et des stands de vulgarisation.
                  </Label>
                </Stack>
                <StyledLottiePlayer {...playerOptions} src={OpticalIllusion} />
                {/* <Box> */}
              </Sidebar>
              <Cluster space={SpacingEnum['s-5']}>
                <Button href="https://www.helloasso.com/associations/casc/evenements/fsc-lille-2022" expand="block" size="large" label="Réservez votre place" color={ColorLabelsEnum.TERTIARY} />
                <Button routerLink="/tabs/programmes" expand="block" size="large" label="Découvrez le programme" fill="outline" color={ColorLabelsEnum.TERTIARY} />
              </Cluster>
            </Stack>
            <Cluster>
              <Tag onClick={() => setShowModal(true)} label="JUNIA HEI" icon={locationOutline} />
              <Tag label="SAM. 19 Mars, à partir de 10h00" icon={timeOutline} />
              <Tag label="Accès libre sur inscription" icon={ticketOutline} />
            </Cluster>
          </Cover>
          {/* <Stack space={SpacingEnum.s3}>
            <Heading level="3">Thématique</Heading>
            <IonList>
              <IonListHeader>
                Méfions-nous des apparences, quelle réalité percevons-nous ?
              </IonListHeader>
              <IonItem>
                Pourquoi et comment notre cerveau transforme-t-il la réalité ?
              </IonItem>
              <IonItem>
                Peut-on prendre conscience de ces biais de perception pour mieux agir ?
              </IonItem>
              <IonItem>
                Quelle contribution des approches expérimentales et artistiques
              </IonItem>
            </IonList>
          </Stack>
          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Une journée de vulgarisation 🧠</Heading>
            <IonCard mode="ios" className="ion-padding-vertical">
              <Sidebar side="left" sideWidth="15em">
                <SvgIcon Icon={France} />
                <Label>Pour la première fois en France, 7 Forums des sciences cognitives auront lieu durant l’année universitaire !
                  La journée est rythmée par des conférences, des stands, des animations ludiques, des débats,
                  des présentations de métiers et des posters scientifiques.
                </Label>
              </Sidebar>
            </IonCard>
          </Stack>


          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Organisateurs</Heading>
            <IonCard mode="ios" className="ion-padding-vertical">
              <Sidebar side="left" sideWidth="15em">
                <SvgIcon color={ColorVariablesEnum.LIGHT} Icon={Logo} />
                <Label>Cette année le forum des sciences cognitives de Lille est organisée par l'association de Sciences Cognitives de Lille (CASC) en collaboration de la fédération française des étudiants et jeunes chercheurs en sciences de la cognition (FRESCO).</Label>
              </Sidebar>
            </IonCard>
          </Stack>

          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Cogni'Quiz</Heading>
            <Label>Pendant le forum des sciences cognitives la fédération française des sciences de la cognition (FRESCO) organise le Cogni’Quiz,
              un «question pour un champion» version sciences cognitives </Label>
            <Button label="Participer" />
          </Stack>

          <Stack space={SpacingEnum.s3}>
            <Heading level="3">Partenaires</Heading>
            <Box borderWidth="0" padding="0">
              <PartenairesSlides />
            </Box>
          </Stack> */}
        </Stack>
        <IonModal
          isOpen={showModal}
          swipeToClose={true}
          initialBreakpoint={1}
          breakpoints={[0, 0.5, 1]}
          onDidDismiss={() => setShowModal(false)}
        >
          <IonPage>
            <Header label="ACCÈS À HEI" mode="ios" icon={close} iconOnclickHandler={() => setShowModal(false)} />
            <Content>
              <Heading level="4">Comment accéder au lieu</Heading>
              <Label size="large">
                Située sur le campus de l'Université Catholique de Lille, HEI est accessible en voiture, en vélo ou en transports en commun
              </Label>
              <IonList>
                <IonListHeader>
                  <Heading level="5">
                    EN METRO
                  </Heading>
                </IonListHeader>
                <IonItem>
                  Les arrêts Cormontaigne ou Port de Lille sont les plus proches d’HEI. Ils se situent à une dizaine de minutes à pied de l’école.
                </IonItem>
                <IonListHeader>
                  <Heading level="5">
                    EN TRAIN
                  </Heading>
                </IonListHeader>
                <IonItem>
                  HEI est située à une vingtaine de minutes à pied des gares Lille Flandres et Lille Europe.
                </IonItem>
                <IonListHeader>
                  <Heading level="5">
                    EN BUS
                  </Heading>
                </IonListHeader>
                <IonItem>
                  Les lignes L5 et la ligne 18 desservent l’arrêt “Université Catholique de Lille”, située à 3 minutes à pied de l’école. Arrêt situé face à la gare Lille Flandres et sur les grands axes.
                </IonItem>
                <IonItem>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.6442132342295!2d3.0429153157380493!3d50.633725879501085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d579573550df%3A0xaa9c89af983f58e9!2sJunia%20Hei%20Lille%20-%20School%20D&#39;ing%C3%A9nieur%20Lille!5e0!3m2!1sen!2sfr!4v1645571926708!5m2!1sen!2sfr" height="450" style={{ "border": 0, width: "100%" }} loading="lazy"></iframe>
                </IonItem>
              </IonList>
            </Content>
          </IonPage>
        </IonModal>


      </Content>
    </IonPage>
  );
};

export default Home;
{/* Photo by <a href="https://unsplash.com/@everhooder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ål nik</a> on <a href="https://unsplash.com/s/photos/conference?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/ }
{/* Photo by <a href="https://unsplash.com/@olav_ahrens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/s/photos/quiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */ }
// Photo by <a href="https://unsplash.com/@kvalifik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kvalifik</a> on <a href="https://unsplash.com/s/photos/workshop?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

