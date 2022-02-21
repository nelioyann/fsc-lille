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
const StyledSplitPane = styled(IonSplitPane)`
    /* --side-max-width: 5em; */
    /* --side-min-width: 5em; */
    --side-max-width: 15em;
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
    contentId?: string;
    tabs: ITab[];
    disabled?: boolean;

}
const MainRoutes: React.FC<IMainRoutes> = ({ disabled = false, tabs, contentId = "main", when = BreakpointsEnum.md }) => {

    return (
        <IonReactRouter>
            <IonContent>
            {/* Wrapping the splitPane in a IonContent 
            produce a better display (less shadows, better header background) */}
                <StyledSplitPane when={when} contentId={contentId} disabled={disabled}>
                    {/* Side Menu */}
                    <Menu tabs={tabs} contentId={contentId} />
                    {/* Main router Outlet */}
                    {/* Using the render method prop cuts down the number of renders your components will have due to route changes.
                        Use the component prop when your component depends on the RouterComponentProps passed in automatically. */}
                    <IonRouterOutlet id={contentId}>
                        <Route exact path="/">
                            <Redirect to="/tabs/accueil" />
                        </Route>
                        {tabs.map(({ path, Component, id, isTab }) => {
                            // if (isTab) {
                                return (<Route key={`route-${id}`} path={path} exact={true} render={() => <Component />} />)
                            // }
                            // else {
                            //     return (<Route key={`route-${id}`} path={path} exact={true} component={Component} />)
                            // }
                        })}
                    </IonRouterOutlet>
                </StyledSplitPane>
            </IonContent>
            <Tabs when={when} tabs={tabs} />
        </IonReactRouter>
    )
};

export default MainRoutes;
