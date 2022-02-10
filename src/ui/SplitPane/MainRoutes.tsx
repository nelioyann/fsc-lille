import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonNote, IonPage, IonRouterLink, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React, { HTMLAttributes } from 'react';
import { Redirect, Route } from 'react-router';

import { Box, Cluster, Stack } from '../../layouts';
import Tabs, { ITab } from '../Content/Tabs/Tabs';
import MenuItem from './MenuItem';
import styled from 'styled-components';
import Menu from './Menu';
import { IonReactRouter } from '@ionic/react-router';

const CircularLogo = styled(Box)`
    border-radius: 50%;
    background: white;
`

export enum BreakpointsEnum {
    "xs" = "xs",
    "sm" = "sm",
    "md" = "md",
    "lg" = "lg",
    "xl" = "xl"
}

interface IMainRoutes {
    when?: BreakpointsEnum;
    contentId: string;
    tabs: ITab[];
    disabled?: boolean;

}
const MainRoutes: React.FC<IMainRoutes> = ({ disabled = false, tabs, contentId, when = BreakpointsEnum.md }) => {

    return (
        <IonReactRouter>
            <IonContent>
                <IonSplitPane contentId={contentId} disabled={disabled}>
                    {/* Side Menu */}
                    <Menu tabs={tabs} contentId={contentId} />
                    {/* the main content */}
                    <IonRouterOutlet id={contentId}>
                        <Route path="/tabs">
                            <Tabs tabs={tabs} when={when} />
                        </Route>
                        <Route exact path="/">
                            <Redirect to="/tabs/accueil" />
                        </Route>
                    </IonRouterOutlet>
                </IonSplitPane>
            </IonContent>
        </IonReactRouter>
    )
};

export default MainRoutes;
