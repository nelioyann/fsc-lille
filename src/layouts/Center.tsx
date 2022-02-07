import styled, { css } from "styled-components";
import { SpacingEnum } from "../theme/globalStyles";

/**
 * @param intrinsic Center child elements based on their content width
 * @param gutters The minimum space on either side of the content
 * @param andText center the text
 */
export interface CenterProps {
    max?: string;
    /**Also center the texts */
    andText?: boolean;
    /**Minimum horizontal padding  */
    gutters?: SpacingEnum;
    intrinsic?: boolean;

}
const Center = styled.div<CenterProps>`
    box-sizing: content-box;
    max-width: ${props => props.max || "var(--measure)"};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${SpacingEnum.s1};
    padding-right: ${SpacingEnum.s1};

    ${({ intrinsic }) =>
        intrinsic &&
        css`
            align-items: center;
            display: flex;
            flex-direction: column;
            > *{
                width: 100%;
            }
        `
    }
    ${({ gutters }) =>
        gutters &&
        css`
            padding-left: ${gutters};
            padding-right: ${gutters};
        `
    }
    ${({ andText }) =>
        andText &&
        css`
            text-align: center;
        `
    }

`

Center.defaultProps = {
    max: SpacingEnum.measure,
    andText: true,
    intrinsic: true
}

export default Center;