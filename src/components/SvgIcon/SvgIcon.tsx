import React from 'react';
import styled from 'styled-components';
import { ColorVariablesEnum, SpacingEnum } from '../../theme/globalStyles';
import {ReactComponent as Book} from '../../data/icons/book-open.svg'

interface ISvgIcon {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    size?: string;
    color?: string;
    padding?: SpacingEnum;
}
interface StyledIconProps {
    $size?: string;
    $padding?: SpacingEnum;
    $color?: string;
}
const SvgContainer = styled.span<StyledIconProps>`
    height: auto;
    width: auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    & svg{
        height: ${props => (props.$size ? `${props.$size}` : "100%")};
        width: ${props => (props.$size ? `${props.$size}` : "100%")};
        stroke: ${props => (props.$color ? `${props.$color}` : "inherit")};
}
`
const SvgIconDefaultProps: ISvgIcon = {
    Icon: Book,
    size: SpacingEnum.s5
}

const SvgIcon: React.FC<ISvgIcon> = ({ Icon , size, padding, color }) => {
    return (
        <SvgContainer $size={size} $padding={padding} $color={color}>
            <Icon />
        </SvgContainer>
    )
};
SvgIcon.defaultProps = SvgIconDefaultProps;
export default SvgIcon;
