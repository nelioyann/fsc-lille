import { IonContent } from '@ionic/react';
import React from 'react';
import styled, { css } from "styled-components";
import { Box } from '../../layouts';
import { isPlatform } from '@ionic/react';
import { BoxProps } from '../../layouts/Box';

const PageContentWrapper = styled(Box)`

`


const StyledContent = styled(IonContent)<{onDesktop: boolean}>`
    ${({ onDesktop }) =>
        onDesktop &&
        css`
            &::part(scroll){
        overflow: hidden;
    }
    
    ${PageContentWrapper}{
        height: 100vh;
        overflow: auto;
        padding-bottom: 5em;
        &::-webkit-scrollbar {
        width: 10px;
        }
        &::-webkit-scrollbar-track {
        background: white;
        }

        &::-webkit-scrollbar-thumb {
        background: black;
        border-radius: 5px;
        }
    }
        `
    }
    
`

const PageContentInner = styled.div`
    width: clamp(15em, 100%, 70em); //set on higher styled component
    margin: auto;
`

interface IContainer extends BoxProps {
    
}
const Content: React.FC<IContainer> = ({ children, ...props }) => {

    return (
        <StyledContent onDesktop={isPlatform('desktop')}>
            <PageContentWrapper {...props} borderWidth="0">
                <PageContentInner>
                    {children}
                </PageContentInner>
            </PageContentWrapper>
        </StyledContent>
    )
};

export default Content;
