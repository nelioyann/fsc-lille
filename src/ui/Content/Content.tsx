import { IonContent } from '@ionic/react';
import React from 'react';
import styled from "styled-components";


const PageContentWrapper = styled.div`
    display: flex;
    align-items: stretch;
    padding: 0 1em;
    /* min-height: 80vh; */
    min-height: 100vh;
    width: 100%;
`

const PageContentInner = styled.div`
    width: clamp(15em, 100%, 70em); //set on higher styled component
`

interface IContainer {

}
const Content: React.FC<IContainer> = ({ children }) => {
    return (
        <IonContent>
            <PageContentWrapper>
                <PageContentInner>
                    {children}
                </PageContentInner>
            </PageContentWrapper>
        </IonContent>
    )
};

export default Content;
