import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonLabelText, ButtonStyles } from "./styles";
import { Font16400 } from "../../commonStyles/styles";

interface ButtonProps {
  ButtonLable?: String;
  onCLick?: any;
  ButtonLableColor?:string;
}
const TeritoryButton = ({
  ButtonLable = "Click",
  onCLick,
  ButtonLableColor,
}: ButtonProps) => {
  return (
    <>
      <ButtonStyles onPress={onCLick}>
        <ButtonLabelText ButtonLableColor={ButtonLableColor}>
          {ButtonLable}
        </ButtonLabelText>
      </ButtonStyles>
    </>
  );
};

export default TeritoryButton;
