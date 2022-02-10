import { IonMenu, IonContent, IonList, IonRouterLink, useIonRouter } from '@ionic/react';
import { calendarOutline } from 'ionicons/icons';
import React from 'react';
import Header from '../../components/Headers/Header';
import Tag from '../../components/Tag/Tag';
import { Stack, Box, Cluster } from '../../layouts';
import { ColorLabelsEnum, ColorVariablesEnum } from '../../theme/globalStyles';
import { ITab } from '../Content/Tabs/Tabs';
import MenuItem from './MenuItem';

interface IMenu{
    contentId: string;
    tabs: ITab[];
}
const Menu: React.FC<IMenu> = ({contentId, tabs}) => {
    const { pathname } = useIonRouter().routeInfo;
    let pathnames = pathname.split("/");
    return (
        <IonMenu contentId={contentId} style={{ "--side-max-width": "15em" }}>
            <Header label="" noBorder color={ColorLabelsEnum.SECONDARY}/>
            <IonContent style={{ "--background": ColorVariablesEnum.SECONDARY }}>
                <Stack splitAfter={1}>
                    <IonList lines="none" style={{ "background": "transparent" }}>
                        {tabs.map(({ label, icon, id, path, isTab }) => {
                            if (isTab) {
                                return (
                                    <MenuItem key={`menuitem-${id}`} label={label} icon={icon} path={path} isActive={pathnames?.includes(id)} />
                                )
                            }
                        })}
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
    )
};

export default Menu;
