import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import React from 'react';
import { Route, Redirect } from 'react-router';

import { BreakpointsEnum } from '../../SplitPane/MainRoutes';

export interface ITab {
    id: string;
    path: string;
    label: string;
    icon: string;
    activeicon?: string; //TODO:
    Component: React.FC<{}>;
    isTab: boolean;
    exact?: boolean;
}

interface ITabs {
    tabs: ITab[];
    contentId?: string;
    when?: BreakpointsEnum;
    noBorder?: boolean;
}

const Tabs: React.FC<ITabs> = ({ tabs, contentId = "tabs", when = BreakpointsEnum.md, noBorder }) => {

    return (
        <IonTabs className={`ion-hide-${when}-up`}>
            <IonRouterOutlet>
                <Redirect exact path="/tabs" to="/tabs/accueil" />
                {/* Using the render method prop cuts down the number of renders your components will have due to route changes.
                Use the component prop when your component depends on the RouterComponentProps passed in automatically. */}
                {tabs.map(({ path, Component, id, isTab }) => {
                    if (isTab) {
                        return (<Route key={`route-${id}`} path={path} exact={true} render={() => <Component />} />)
                    }
                    else {
                        return (<Route key={`route-${id}`} path={path} exact={true} component={Component} />)
                    }
                })}
            </IonRouterOutlet>
            <IonTabBar slot="bottom" style={{ "--border": noBorder ? "none" : "" }}>
                {tabs.map(tab => {
                    if (tab.isTab) {
                        return (
                            <IonTabButton key={`tabButton_${tab.id}`} layout="icon-top" tab={tab.id} href={tab.path}>
                                <IonIcon icon={tab.icon} />
                                <IonLabel>{tab.label}</IonLabel>
                            </IonTabButton>
                        )
                    }
                })}
            </IonTabBar>
        </IonTabs>
    )
};

export default Tabs;
