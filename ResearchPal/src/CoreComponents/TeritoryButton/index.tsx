import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonLabelText, ButtonStyles } from "./styles";
import { Font16400 } from "../../commonStyles/styles";

interface ButtonProps {
  ButtonLable?: string;
  onCLick?: any;
}
const TeritoryButton = ({ ButtonLable = "Click", onCLick }: ButtonProps) => {
  return (
    <>
      <ButtonStyles onPress={onCLick}>
        <ButtonLabelText>{ButtonLable}</ButtonLabelText>
      </ButtonStyles>
    </>
  );
};

export default TeritoryButton;
