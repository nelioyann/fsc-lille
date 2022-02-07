import styled from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

/**
 * The cover compoenent us useful for having a vertically centered 
 * elment in the middle with optional headerand footer elements.
 * Add 
 */

interface CoverProps{
  /**
   *  Set a selector to the centered element, default=[data-centered]
   * 
   */
    centered?: string; // could be a attribute data-centered on a child
    minHeight?: string;
    noPad?: boolean;
    space?: string;
}
const Cover = styled.div<CoverProps>`
    display: flex;
    flex-direction: column;
    min-height: ${props => props.minHeight || "100vh"};
    padding: ${({ noPad, space }) => Boolean(!noPad) ? space || SpacingEnum.s1 : '0px'};


    > * {
    margin-top: ${props => props.space || SpacingEnum.s1};
    margin-bottom: ${props => props.space || SpacingEnum.s1};
  }

  > :first-child:not(${props => props.centered || "[data-centered]"}) {
    margin-top: 0;
  }
  > :last-child:not(${props => props.centered || "[data-centered]"}) {
    margin-bottom: 0;
  }
  > ${props => props.centered || "[data-centered]"} {
    margin-top: auto;
    margin-bottom: auto;
  }
`

export default Cover