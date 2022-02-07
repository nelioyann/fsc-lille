import styled, { css } from "styled-components";
import { ColorVariablesEnum, SpacingEnum } from "../theme/globalStyles";

export interface BoxProps{
    /** A CSS border-width value */
    borderWidth?: string;
    /** A CSS padding value */
    padding?: string;
    /**Whether to apply an inverted theme. Only recommended for greyscale designs. */
    invert?: boolean;
}

const BoxDefaultProps :BoxProps = {
    padding: SpacingEnum.s1,
    borderWidth: SpacingEnum.borderThin,
    invert: false
    
}

const Box = styled.div<BoxProps>`    
    padding: ${props => props.padding || BoxDefaultProps.padding};
    border: ${props => props.borderWidth || BoxDefaultProps.borderWidth} solid;
    /* ↓ For high contrast mode */
    outline: ${BoxDefaultProps.borderWidth} solid transparent;
    outline-offset: calc(${BoxDefaultProps.borderWidth} * -1);
    /* background-color: ${ColorVariablesEnum.LIGHT}; */
    color: ${ColorVariablesEnum.DARK};
    display: block;

    ${({invert}) => invert && css`
        background-color: ${ColorVariablesEnum.DARK};
        color: ${ColorVariablesEnum.LIGHT};
            
    `}

`
Box.defaultProps = BoxDefaultProps;
export default Box;