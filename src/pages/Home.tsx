import { IonContent, IonPage } from '@ionic/react';
// import { SpacingEnum } from '../theme/globalStyles';
import Header from '../components/Headers/Header';
import Heading from '../components/Headings/Heading';
import SvgIcon from '../components/SvgIcon/SvgIcon';
import { Box, Center, Cover, Sidebar, Stack, Switcher } from '../layouts';
import { ReactComponent as Logo } from "../data/icons/Logo.svg"
import { ColorLabelsEnum, Label, SpacingEnum } from '../theme/globalStyles';
import Card from '../components/Cards/Card';
import Chairs from "../data/images/chair_room.jpg"
import Rubix from "../data/images/rubix.jpg"
import Button from '../components/Buttons/Button';
import Content from '../ui/Content/Content';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header label="Bienvenue"  />
      <Content >
          <Stack >
            <Cover noPad minHeight='75vh'>
              <Stack data-centered="true">
                <Heading level="1">
                  Forum des Sciences Cognitives
                </Heading>
                <Heading level="2">Lille, 2022</Heading>
                <Label size="large">
                  Retrouvez nous pour une journée de vulgarisation des sciences cognitives, rythmée par des conférences, des stands, des animations ludiques et des débats.
                </Label>
              </Stack>
              <Button expand="block" size="large" label="Inscrivez vous, c'est gratuit" color={ColorLabelsEnum.PRIMARY} />
            </Cover>
            <Stack >
              <Heading level="3">Les thématiques abordées</Heading>
              <Switcher space={SpacingEnum.s0}>
                <Card size="full" routerLink="/tabs/programmes" imageUrl={Chairs} title="Conférences" subtitle=" " />
                <Card size="full" routerLink="/tabs/programmes" imageUrl={Chairs} title="Conférences" subtitle=" " />
                <Card size="full" routerLink="/tabs/programmes" imageUrl={Rubix} title="Animations" subtitle=" " />
              </Switcher>
            </Stack>
          </Stack>
      </Content>
    </IonPage>
  );
};

export default Home;
{/* Photo by <a href="https://unsplash.com/@everhooder?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">ål nik</a> on <a href="https://unsplash.com/s/photos/conference?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>*/ }
{/* Photo by <a href="https://unsplash.com/@olav_ahrens?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olav Ahrens Røtne</a> on <a href="https://unsplash.com/s/photos/quiz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */ }
