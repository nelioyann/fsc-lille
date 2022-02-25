import { IonButton, IonIcon, IonSpinner } from "@ionic/react";
import React, { HTMLAttributes } from "react";
import styled from "styled-components";
import { ButtonText, ColorLabelsEnum, ColorVariablesEnum, SpacingEnum } from "../../theme/globalStyles";

interface IButton extends HTMLAttributes<HTMLIonButtonElement> {
  /**
   *  Provide a text for the button element
   * 
   */
  label: string;
  isLoading?: boolean;
  shape?: "round";
  icon?: string;
  expand?: "block" | "full" | undefined;
  mode?: "ios" | "md";
  size?: "small" | "default" | "large";
  fill?: "clear" | "outline" | "solid";
  iconSlot?: "start" | "end";
  color?: ColorLabelsEnum;
  type?: "button" | "reset" | "submit";
  routerLink?: string;
  href?: string;
  target?: "_blank"| "_self"| "_parent"| "_top"

}

const ButtonDefaultProps: IButton = {
  label: "",
  isLoading: false,
  fill: "solid",
  color: ColorLabelsEnum.PRIMARY,
  iconSlot: "start",
  mode: "ios",
  expand: undefined,
  type: "button",
  target: "_blank"
}

const StyledButton = styled(IonButton)`
  border-radius: ${SpacingEnum.subtleCurve};
  transition: box-shadow 300ms;

  &:focus, &:focus-within{
    box-shadow: 0 0 0 0.15rem ${ColorVariablesEnum.LIGHT}, 0 0 0 0.35rem ${ColorVariablesEnum.PRIMARY};
  }
`

const Button: React.FC<IButton> = ({
  isLoading,
  fill,
  color,
  icon,
  shape,
  iconSlot,
  label,
  type,
  routerLink,
  target,
  href,
  ...props
}) => {
  return (
    <StyledButton target={target} href={href} routerLink={routerLink} type={type} disabled={isLoading} style={{ position: "relative"}} fill={fill} shape={shape} color={color}  {...props}>
      {isLoading
        && (
          <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <IonSpinner style={{ fontSize: "1em" }} name="crescent" />
          </div>
        )
      }
      <>
        {icon && <IonIcon style={{ visibility: isLoading ? "hidden" : "visible", marginRight: "0.5em", margin: !label ? 0 : undefined}} icon={icon} slot={iconSlot}/>}
        {label && <ButtonText size={props.size ? props.size : "default"} isVisible={!isLoading}>
          {label}
        </ButtonText>}
      </>
    </StyledButton>
  );
};

Button.defaultProps = ButtonDefaultProps;
export default Button;
