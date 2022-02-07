import styled from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

/**
 * Grids are great for browsing teasers for permalinks or products.
 *  I can quickly compose a card component to house each of my teasers
 *  using a Box and a Stack.
 * Each card shares the same height, regardless of its content,
 * because the default value for is .
 */
interface GridProps{
    min?: string;
    space?: string;
}
const Grid = styled.div<GridProps>`
    display: grid;
    grid-template-columns: repeat(auto-fit,
            minmax(min(${props => props.min || "20ch"}, 100%), 1fr)) ;
    gap: ${(props) => props.space || SpacingEnum.s1};
`
export default Grid;