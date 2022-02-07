import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { calendarOutline, homeOutline } from 'ionicons/icons';
import React from 'react';
import { Route } from 'react-router';
import Home from '../../../pages/Home';
import SplitPane, { BreakpointsEnum } from '../../SplitPane/SplitPane';

export interface ITab {
    id: string;
    path: string;
    label: string;
    icon: string;
    activeicon?: string; //TODO:
    component: React.FC<{}>;
    isTab: boolean;
    exact?: boolean;
}

interface ITabs {
    tabs: ITab[];
    contentId: string;
    when: BreakpointsEnum;
    noBorder?: boolean;
}

const Tabs: React.FC<ITabs> = ({ tabs, contentId, when, noBorder }) => {

    return (
        <IonReactRouter>
            <IonTabs className={`ion-hide-${when}-up `}>
                <IonRouterOutlet id={contentId}>
                    {tabs.map(({ path, component, id }) => (
                        <Route key={`route-${id}`} path={path} exact={true} component={component} />
                    ))}
                </IonRouterOutlet>
                <IonTabBar slot="bottom" style={{"--border": noBorder? "none":""}}>
                    {tabs.map(tab => {
                        if (tab.isTab) {
                            return (
                                <IonTabButton key={tab.id} layout="icon-start" tab={tab.id} href={tab.path}>
                                    <IonIcon icon={tab.icon} />
                                    <IonLabel>{tab.label}</IonLabel>
                                </IonTabButton>
                            )
                        }
                    })}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    )
};

export default Tabs;
