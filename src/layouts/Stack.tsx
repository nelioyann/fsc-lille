import styled, { css } from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

/** 
 * Stack components for vertically aligned elements
  */
export interface StackProps {
    /**
     * Whether the spaces apply recursively (i.e. regardless of nesting level)
     */
    recursive?: boolean;
    /**
     * A CSS margin value
     */
    space?: string;
    /**
     * The element after which to split the stack with an auto margin
     */
    splitAfter?: number;
}

const Stack = styled.div<StackProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    & > *{
        margin-top: 0;
        margin-bottom: 0;
    }
    :only-child{
        height: 100%;
    }
    ${({ recursive }) =>
        Boolean(recursive)
            ? ""
            : ">"
    }
    * + * {
        margin-top: ${props => props.space || SpacingEnum.s1};
    }
    
    ${({splitAfter}) => 
        Boolean(splitAfter) && css`
            & > :nth-child(${splitAfter}){
                margin-bottom: auto;
            }
        `
        }
`

Stack.defaultProps = {
    space: SpacingEnum.s1,
    recursive: false,
}

export default Stack;

