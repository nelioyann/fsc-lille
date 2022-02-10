/** 
 * Cluster components suits any groups of elements that difer in legth and are reliable to wrap.
 * Add role="list" and role="listitem" if applicable
 * Buttons that appear together at the end of forms are ideal candidates, as well as lists of tags, keywords, or other meta information
  */

import styled, { css } from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

export interface ClusterProps {
    /** A CSS align-items value */
    align?: "stretch" | "center" | "flex-start" | "flex-end";
    /** A CSS justify-content value */
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    /**A CSS gap value. The minimum space between the clustered child elements. */
    space?: string;
    /**Add a with to children elements */
    intrinsicWidth?: boolean;
}

const ClusterDefaultProps: ClusterProps = {
    align: "flex-start",
    justify: "flex-start",
    space: "0",
    intrinsicWidth: false
}

const Cluster = styled.div<ClusterProps>`
        display: flex;
        flex-wrap: wrap;
        align-items: ${props => props.align || ClusterDefaultProps.align};
        justify-content: ${props => props.justify || ClusterDefaultProps.justify};
        gap: ${props => props.space || ClusterDefaultProps.space};
        ${({ intrinsicWidth }) =>
        intrinsicWidth &&
        css`
            > *{
                width: 100%;
            }
        `
    }


`
Cluster.defaultProps = ClusterDefaultProps;

export default Cluster;


