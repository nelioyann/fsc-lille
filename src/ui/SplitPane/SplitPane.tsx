import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuButton, IonNote, IonPage, IonRouterLink, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { albumsOutline, appsOutline, calendarOutline, layersOutline } from 'ionicons/icons';
import React, { HTMLAttributes } from 'react';
import { Redirect, Route } from 'react-router';
import Header from '../../components/Headers/Header';
import SvgIcon from '../../components/SvgIcon/SvgIcon';
import Tag from '../../components/Tag/Tag';
import { Box, Cluster, Stack } from '../../layouts';
import ProgrammeItem from '../../pages/ProgrammeItem';
import { ColorLabelsEnum, ColorVariablesEnum } from '../../theme/globalStyles';
import Tabs, { ITab } from '../Content/Tabs/Tabs';
import MenuItem from './MenuItem';
import { ReactComponent as Logo } from "../../data/icons/Logo.svg"
import styled from 'styled-components';
import Intervenant from '../../pages/Intervenant';

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

interface ISplitPane extends HTMLAttributes<HTMLIonSplitPaneElement> {
    when?: BreakpointsEnum;
    contentId: string;
    children?: React.ReactNode;
    tabs: ITab[];
    disabled?: boolean;

}
const SplitPane: React.FC<ISplitPane> = ({ disabled = false, tabs, contentId, when = BreakpointsEnum.md, ...props }) => {
    const { pathname } = useIonRouter().routeInfo;
    let pathnames = pathname.split("/");
    return (
        // <IonContent >
            <IonSplitPane  {...props} contentId={contentId} disabled={disabled}>
                <IonMenu contentId={contentId} style={{ "--side-max-width": "15em" }}>
                    <Header label="" noBorder
                        color={ColorLabelsEnum.SECONDARY}
                    />
                    <IonContent
                        style={{ "--background": ColorVariablesEnum.SECONDARY }}
                    >
                        <Stack splitAfter={1}>
                            <IonList lines="none" style={{ "background": "transparent" }}>

                                {/* <SvgIcon size="50%" Icon={Logo} /> */}
                                {/* <IonListHeader>
                                <IonNote>Molecules</IonNote>
                            </IonListHeader> */}
                                {tabs.map(({ label, icon, id, path }) => (
                                    <MenuItem key={`menuitem-${id}`} label={label} icon={icon} path={path} isActive={pathnames?.includes(id)} />
                                ))}
                            </IonList>
                            <Box borderWidth="0">
                                <Cluster>
                                    <IonRouterLink target="_blank" href="https://goo.gl/maps/pv7zghs1zZogd7P27">
                                        <Tag label="Université Catholique" />
                                    </IonRouterLink>
                                    <Tag color={ColorLabelsEnum.DARK} icon={calendarOutline} label="19 mars 2022" />
                                </Cluster>
                            </Box>
                        </Stack>
                    </IonContent>
                </IonMenu>
                {/* the main content */}
                <IonRouterOutlet id={contentId}>
                    {tabs.map(({ path, component, id }) => (
                        <Route key={`route-${id}`} path={path} exact={true} component={component} />
                    ))}
                    <Route exact path="/">
                        <Redirect to="/accueil" />
                    </Route>
                    <Route path="/programme/:id" exact={true} component={ProgrammeItem} />
                    <Route path="/intervenants/:id" exact={true} component={Intervenant} />
                </IonRouterOutlet>
            </IonSplitPane>
        // </IonContent>
    )
};

export default SplitPane;
