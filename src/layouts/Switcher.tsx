import styled from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";
// Usecases: elements belonging to a continuum or steps in a tutorial

export interface SwitcherProps{
    /** A CSS value (representing the 'container breakpoint') */
    threshold?: string;
    /**A CSS margin value */
    space?: string;
    /** A number representing the maximum number of items permitted for a horizontal layout */
    limit?: number;

}
const SwitcherDefaultProps = {
        limit: 4,
        threshold: "30rem",
        space: SpacingEnum.s1
}

const Switcher = styled.div<SwitcherProps>`
    display: flex;
    flex-wrap: wrap;
    gap: ${props => props.space || SwitcherDefaultProps.space};
    > * {
        flex-grow: 1;
        flex-basis: calc((${props => props.threshold || SwitcherDefaultProps.threshold} - 100%) * 999 );
    }
    > :nth-last-child(n+${props => props.limit || SwitcherDefaultProps.limit + 1}),
    > :nth-last-child(n+${props => props.limit || SwitcherDefaultProps.limit + 1}) ~ * {
        flex-basis: 100%;
    }
`

Switcher.defaultProps = SwitcherDefaultProps;

export default Switcher;