import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, useIonRouter, IonLoading  } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/fonts.css';
import Tabs, { ITab } from './ui/Content/Tabs/Tabs';
import { calendar, home, informationCircle, mail, people } from 'ionicons/icons';
import MainRoutes, { BreakpointsEnum } from './ui/SplitPane/MainRoutes';
import Programme from './pages/Programme';
import Contact from './pages/Contact';
import Intervenants from './pages/Intervenants';
import Intervenant from './pages/Intervenant';
import ProgrammeItem from './pages/ProgrammeItem';
import Directions from './pages/Directions';


import HomeLottie from "./data/lotties/home.json";
import CalendarLottie from "./data/lotties/calendar.json";
import InfoLottie from "./data/lotties/info.json";
import UsersLottie from "./data/lotties/users.json";
import WorkshopItem from './pages/WorkshopItem';


setupIonicReact();

export const tabs: ITab[] = [
  {
    id: 'accueil',
    path: '/tabs/accueil',
    label: 'Accueil',
    icon: HomeLottie,
    Component: Home,
    isTab: true,
  },
  {
    id: 'programmes',
    path: '/tabs/programmes',
    label: 'Programme',
    icon: CalendarLottie,
    Component: Programme,
    isTab: true,
  },
  {
    id: 'intervenants',
    path: '/tabs/intervenants',
    label: 'Intervenants',
    icon: UsersLottie,
    Component: Intervenants,
    isTab: true,
  }
  ,
  {
    id: 'contact',
    path: '/tabs/contact',
    label: 'Informations',
    icon: InfoLottie,
    Component: Contact,
    isTab: true,
  },
  {
    id: 'intervenant',
    path: '/tabs/intervenants/:id',
    label: 'Intervenant',
    icon: UsersLottie,
    Component: Intervenant,
    isTab: false,
  },

  {
    id: 'programme',
    path: '/tabs/programmes/:id',
    label: 'Programme',
    icon: CalendarLottie,
    Component: ProgrammeItem,
    isTab: false,
  },
  {
    id: 'workshop',
    path: '/tabs/programmes/demos/:id',
    label: 'Atelier',
    icon: CalendarLottie,
    Component: WorkshopItem,
    isTab: false,
  },
  {
    id: 'directions',
    path: '/tabs/accueil/directions',
    label: 'Lieu',
    icon: people,
    Component: Directions,
    isTab: false,
  },
]
const App: React.FC = () => {
  return (
    <IonApp>
        <MainRoutes when={BreakpointsEnum.md} tabs={tabs} />
    </IonApp>
  )
}

export default App;
