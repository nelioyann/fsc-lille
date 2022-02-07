import { IonButton, IonIcon, IonSpinner } from "@ionic/react";
import React, { HTMLAttributes } from "react";
import { ButtonText, ColorLabelsEnum } from "../../theme/globalStyles";

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
}

const ButtonDefaultProps: IButton = {
  label: "",
  isLoading: false,
  fill: "solid",
  color: ColorLabelsEnum.PRIMARY,
  iconSlot: "start",
  mode: "ios",
  expand: undefined,
}
const Button: React.FC<IButton> = ({
  isLoading,
  fill,
  color,
  icon,
  shape,
  iconSlot,
  label,
  ...props
}) => {
  return (
    <IonButton disabled={isLoading} style={{ position: "relative"}} fill={fill} shape={shape} color={color}  {...props}>
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
    </IonButton>
  );
};

Button.defaultProps = ButtonDefaultProps;
export default Button;
