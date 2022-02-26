import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ColoredProps, ColorVariablesEnum, FontTypeEnum, FontWeightEnum } from '../../theme/globalStyles';


const Heading1 = styled.h1<ColoredProps>`
    font-family: ${FontTypeEnum['SANS-SERIF']};
    font-weight: ${FontWeightEnum.BOLD};
    color: ${props => props.color ? `${props.color}` : `var(--ion-color-dark)`};
    font-size: 3rem;
    line-height: 105%;
    letter-spacing: -1px;
    white-space: normal;
    padding: 0;
    margin: 0;
`
const Heading2 = styled.h2<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `${props.color}` : `var(--ion-color-dark)`};
    font-size: 2.5rem;
    line-height: 115%;
    letter-spacing: -1px;
    white-space: normal;
    padding: 0;
    margin: 0;
`
const Heading3 = styled.h3<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `${props.color}` : `var(--ion-color-dark)`};
    font-size: 2rem;
    line-height: 130%;
    letter-spacing: -1px;
    white-space: normal;
    padding: 0;
    margin: 0;
`

const Heading4 = styled.h4<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `${props.color}` : `var(--ion-color-dark)`};
    padding: 0;
    margin: 0;
    white-space: normal;
    font-size: 1.5rem;
    line-height: 133%;
    
`
const Heading5 = styled.h5<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `${props.color}` : `var(--ion-color-dark)`};
    font-size: 1.25rem;
    line-height: 130%;
    white-space: normal;
    padding: 0;
    margin: 0;
`
const Heading6 = styled.h6<ColoredProps>`
    font-weight: var(--font-bold);
    color: ${props => props.color ? `${props.color}` : `var(--ion-color-dark)`};
    font-size: 1rem;
    line-height: 130%;
    white-space: normal;
    padding: 0;
    margin: 0;
`

interface IHeading extends HTMLAttributes<HTMLHeadingElement>{
    children: string;
    level: "1" | "2" | "3" | "4" | "5" | "6" ;
    color?: ColorVariablesEnum ;
}

const HeadingDefaultProps: IHeading = {
    children: "", 
    level: "4",
    color: ColorVariablesEnum.DARK
}
const Heading: React.FC<IHeading> = ({level, color, children, ...props}) => {
    return (
        <>
        {level === "1" && <Heading1 {...props} color={color} >{children}</Heading1>}
        {level === "2" && <Heading2 {...props} color={color} >{children}</Heading2>}
        {level === "3" && <Heading3 {...props} color={color} >{children}</Heading3>}
        {level === "4" && <Heading4 {...props} color={color} >{children}</Heading4>}
        {level === "5" && <Heading5 {...props} color={color} >{children}</Heading5>}
        {level === "6" && <Heading6 {...props} color={color} >{children}</Heading6>}
        </>
        
    )
}

Heading.defaultProps = HeadingDefaultProps
export default Heading
