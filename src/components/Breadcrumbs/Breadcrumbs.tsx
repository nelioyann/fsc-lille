import { IonBreadcrumb, IonBreadcrumbs, useIonRouter } from '@ionic/react'
import React from 'react'
import styled from 'styled-components';

interface IBreadcrumb {
    path: string;
    label: string;
    icon?: string;
}
interface IBreadcrumbs {
    breadcrumbs: IBreadcrumb[];
}
const StyledBreadcrumb = styled(IonBreadcrumb)`
    cursor: pointer ;
`
const Breadcrumbs: React.FC<IBreadcrumbs> = ({breadcrumbs}) => {
    const router = useIonRouter()
    console.log(breadcrumbs)
  return (
    <IonBreadcrumbs mode="ios">
        {breadcrumbs.map(({path, label}, index) => <StyledBreadcrumb key={label} onClick={() => router.push(path)}>{label}</StyledBreadcrumb>)}
    </IonBreadcrumbs>
  )
}

export default Breadcrumbs