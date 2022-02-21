import { HTMLAttributes } from "react";
import styled, { createGlobalStyle, css } from "styled-components";
// import { ButtonProps } from "../components/Buttons/Button";


export enum FontTypeEnum{
    "SERIF" = "'Bitter', serif",
    "SANS-SERIF" = "'Zen Maru Gothic', sans-serif"
}

export enum SpacingEnum {
    "measure" = "var(--measure)",
    "borderThin" = "var(--border-thin)",
    "subtleCurve" = "0.5em", //TODO: Add it everywhere
    "bigCurve" = "1em", //TODO: Add it everywhere
    "borderThicc" = "var(--border-thicc)", //TODO: Add it everywhere
    "s-5"= "var(--s-5)",
    "s-4"= "var(--s-4)",
    "s-3"= "var(--s-3)",
    "s-2"= "var(--s-2)",
    "s-1"= "var(--s-1)",
    "s0"= "var(--s0)",
    "s1"= "var(--s1)",
    "s2"= "var(--s2)",
    "s3"= "var(--s3)",
    "s4"= "var(--s4)",
    "s5"= "var(--s5)",
}

export enum FontWeightEnum {
    "BOLD" = "var(--font-bold)",
    "REGULAR" = "var(--font-regular)",
    "LIGHT" = "var(--font-light)",
}

export enum ColorVariablesEnum {
    "PRIMARY" = "var(--ion-color-primary)",
    "SECONDARY" = "var(--ion-color-secondary)",
    "TERTIARY" = "var(--ion-color-tertiary)",
    "LIGHT" = "var(--ion-color-light)",
    "DARK" = "var(--ion-color-dark)",
    "MEDIUM" = "var(--ion-color-medium)",
    "SUCCESS" = "var(--ion-color-success)",
    "DANGER" = "var(--ion-color-danger)",
    "WARNING" = "var(--ion-color-warning)",
}
export enum ColorLabelsEnum {
    "PRIMARY" = "primary",
    "SECONDARY" = "secondary",
    "TERTIARY" = "tertiary",
    "LIGHT" = "light",
    "DARK" = "dark",
    "MEDIUM" = "medium",
    "SUCCESS" = "success",
    "DANGER" = "danger",
    "WARNING" = "warning",

}

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;  
}
`
export default GlobalStyle;

export interface ColoredProps {
    color?: ColorVariablesEnum ;
}


export const SmallParagraph = styled.p<ColoredProps>`
  font-size: 0.75rem;
  line-height: 150%;
  color: ${props => props.color ? `var(--ion-color-${props.color})` : `var(--ion-color-dark-shade)`};
  /* --ionicon-stroke-width: 64px; */
  white-space: normal;
  font-weight: ${FontWeightEnum.BOLD};
`;
export const MediumParagraph = styled(SmallParagraph)`
  font-size: 0.875rem;
  font-weight: var(--font-semibold);
`;
export const LargeParagraph = styled(MediumParagraph)`
  font-size: 1rem;
  line-height: 162%;
  font-weight: initial;
`;

interface ParagraphProps extends ColoredProps{
    size?: "small" | "default" | "large";
    isVisible?: boolean;
}

interface HeadingsProps extends HTMLAttributes<HTMLHeadingElement>{
    
}

export const Label = styled.p<ParagraphProps>`
    font-size: 1rem !important;
    ${({ color }) =>
        color !== undefined &&
        css`
            color: ${color};
        `
    }
    ${({ size }) =>
        size === "small" &&
        css`
            font-size: 1rem !important;
            font-weight: ${FontWeightEnum.REGULAR};
            `
    }
    ${({ size }) =>//useless FIXME:
        size === "default" &&
        css`
            font-size: 1.125rem !important;
            font-weight: ${FontWeightEnum.REGULAR};
        `
    }
    ${({ size }) =>
        size === "large" &&
        css`
            font-size: 1.250rem !important;
            font-weight: ${FontWeightEnum.BOLD};

        `
    }
`
export const ButtonText = styled(Label)`
${({ isVisible }) =>
        isVisible === false &&
        css`
            visibility: hidden;
        `
    }
    font-weight: ${FontWeightEnum.BOLD};
`
export const MediumButton = styled(MediumParagraph)`
  font-size: 1rem;
  font-weight: ${FontWeightEnum.BOLD};
  line-height: 18px;
  `;
export const LargeButton = styled(MediumButton)`
  font-size: 1.125rem;
  min-width: 150px;
  font-weight: ${FontWeightEnum.BOLD};
  line-height: 122%;
`;



export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    /* flex-direction: column; */
`

export const HorizontalScroll = styled.div`
    overflow: auto;
    white-space: nowrap;
`


interface ModuleProps {
    unique?: boolean;
}

export const ModuleWrapper = styled.div<ModuleProps>`
    border: 2px solid var(--ion-color-medium);
    border-radius: 8px;
    width: ${props => props.unique ? "100%" : "90%"};
    margin: ${props => props.unique ? "auto" : "0 8px"};
    max-width: 500px;
    display: inline-block;
    cursor: pointer;
`
