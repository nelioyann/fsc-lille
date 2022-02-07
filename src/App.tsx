import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact, useIonRouter } from '@ionic/react';
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
import { calendarOutline, homeOutline, mailOutline } from 'ionicons/icons';
import SplitPane, { BreakpointsEnum } from './ui/SplitPane/SplitPane';
import Programme from './pages/Programme';
import Contact from './pages/Contact';


setupIonicReact();

const tabs: ITab[] = [
  {
    id: 'accueil',
    path: '/accueil',
    label: 'Accueil',
    icon: homeOutline,
    component: Home,
    isTab: true,
  },
  {
    id: 'programme',
    path: '/programme',
    label: 'Programme',
    icon: calendarOutline,
    component: Programme,
    isTab: true,
  },
  {
    id: 'contact',
    path: '/contact',
    label: 'Contact',
    icon: mailOutline,
    component: Contact,
    isTab: true,
  },
  ]
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <SplitPane contentId="side" when={BreakpointsEnum.md} tabs={tabs} />
        <Tabs tabs={tabs} contentId="tabs" when={BreakpointsEnum.md} />
      </IonReactRouter>
    </IonApp>
  )
}

export default App;
