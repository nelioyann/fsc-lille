import styled, { css } from "styled-components";
import { ColorVariablesEnum, SpacingEnum } from "../theme/globalStyles";

export interface BoxProps{
    /** A CSS border-width value */
    borderWidth?: string;
    /** A CSS padding value */
    padding?: string;
    /**Whether to apply an inverted theme. Only recommended for greyscale designs. */
    invert?: boolean;
    /**Max content */
    maxContent?: boolean
}

const BoxDefaultProps :BoxProps = {
    padding: SpacingEnum.s1,
    borderWidth: SpacingEnum.borderThin,
    invert: false,
    
}

const Box = styled.div<BoxProps>`    
    padding: ${props => props.padding || BoxDefaultProps.padding};
    border: ${props => props.borderWidth || BoxDefaultProps.borderWidth} solid;
    /* ↓ For high contrast mode */
    outline: ${BoxDefaultProps.borderWidth} solid transparent;
    outline-offset: calc(${BoxDefaultProps.borderWidth} * -1);
    color: ${ColorVariablesEnum.DARK};
    display: block;

    ${({invert}) => invert && css`
        /* background-color: ${ColorVariablesEnum.DARK}; */
    background-color: ${ColorVariablesEnum.LIGHT};

        filter: invert(100%);
            
    `}
    ${({maxContent}) => maxContent && css`
        width: max-content !important;
            
    `}

`
Box.defaultProps = BoxDefaultProps;
export default Box;