

import styled from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";


export interface SidebarProps {
    /** side Which element to treat as the sidebar (all values but "left" are considered" right") */
    side?: 'left' | 'right';
    /** sideWidth Represents the width of the sidebar adjacent. If not set ( ) it defaults to the sidebar's content width */
    sideWidth?: string;
    /**  contentMin A CSS value. The minimum width of the content element in the horizontal configuration. Prefer % values */
    contentMin?: string;
    /** space A CSS margin value representing the space between the two elements */
    space?: string;
    noStretch?: boolean;
}
const Sidebar = styled.div<SidebarProps>`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.space || SpacingEnum.s1};
    align-items: ${props => props.noStretch ? "flex-start" : "stretch"};
    /* Direct child: Sidebar and Content */
    > * {
    display: flex;
    flex-wrap: wrap;
    
    }

  /* Sidebar */
    > ${({ side }) => side !== 'left' ? `:last-child` : `:first-child`} {
        flex-grow: 1;
        ${({ sideWidth }) => sideWidth ? `flex-basis: ${sideWidth};` : ''}
    }
/* Content */
    > ${({ side }) => side !== 'left' ? `:first-child` : `:last-child`} {
        flex-basis: 0;
        flex-grow: 999;
        min-width: ${props => props.contentMin || "50%"}
    }
`

export default Sidebar;