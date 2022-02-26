import { IonIcon, IonLabel, IonPopover, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';

import React from 'react';
import { Route, Redirect } from 'react-router';
import styled from 'styled-components';
import "./Tabs.css"

import { BreakpointsEnum } from '../../SplitPane/MainRoutes';

const TabBarStyles = {
    width: "50%",
    position: "absolute",
    bottom: "30px",
    left: "26%",
    height: "70px",
    paddingTop: "5px",
    paddingBottom: "5px",
    margin: "0 auto !important",
    borderRadius: "20px",
    gap: "0.5em",
    background: "#474a4c40"
}

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
        <IonTabs
        // className={`ion-hide-${when}-up`}
        >
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
                <Route exact path="/">
                    <Redirect to="/tabs/accueil" />
                </Route>
            </IonRouterOutlet>
            {/* <IonTabBar slot="bottom" style={{display: 'none'}}></IonTabBar> */}
            <IonTabBar color="primary" slot="bottom" style={{ "--border": noBorder ? "none" : "" }}>
                {tabs.map(tab => {
                    if (tab.isTab) {
                        return (
                            <IonTabButton  key={`tabButton_${tab.id}`} layout="label-hide" tab={tab.id} href={tab.path}>
                                <IonIcon id={tab.id} icon={tab.icon} />
                                {/* <IonPopover alignment="center" mode="ios" side="top" showBackdrop={false} trigger={tab.id} triggerAction="click"  > */}
                                    <IonLabel>
                                        {tab.label}
                                        </IonLabel>
                                {/* </IonPopover> */}
                            </IonTabButton>
                        )
                    }
                })}
            </IonTabBar>
        </IonTabs>
    )
};

export default Tabs;
