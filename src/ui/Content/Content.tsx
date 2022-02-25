import { IonContent } from '@ionic/react';
import React from 'react';
import styled, { css } from "styled-components";
import { Box } from '../../layouts';
import { isPlatform } from '@ionic/react';
import { BoxProps } from '../../layouts/Box';
import { ColorVariablesEnum } from '../../theme/globalStyles';

const PageContentWrapper = styled(Box)`

`


const StyledContent = styled(IonContent) <{ onDesktop: boolean }>`
    --background: ${ColorVariablesEnum.LIGHT};
    ${PageContentWrapper}{
    padding-bottom: 10em;
    }
    ${({ onDesktop }) =>
        onDesktop &&
        css`
            &::part(scroll){
                overflow: hidden;
            }
    
    ${PageContentWrapper}{
        height: 100vh;
        overflow: auto;
        padding-top: 5em;
        /* Reserves the scrollbar space to avoid visual shifts */
        scrollbar-gutter: stable;
        &::-webkit-scrollbar {
        width: 10px;
        }
        &::-webkit-scrollbar-track {
        background: ${ColorVariablesEnum.LIGHT};
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb {
        /* background: black; */
        background-image: linear-gradient(180deg, ${ColorVariablesEnum.SECONDARY} 0%, ${ColorVariablesEnum.PRIMARY} 99%);
        box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
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
        <StyledContent fullscreen onDesktop={isPlatform('desktop')}>
            <PageContentWrapper {...props} borderWidth="0">
                <PageContentInner>
                    {children}
                </PageContentInner>
            </PageContentWrapper>
        </StyledContent>
    )
};

export default Content;
