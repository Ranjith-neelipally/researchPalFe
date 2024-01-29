import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ButtonStyles } from "./styles";
import { Font16400 } from "../../commonStyles/styles";

interface ButtonProps {
  ButtonLable?: string;
  onCLick?: any;
}
const PrimaryButton = ({ ButtonLable = "Click", onCLick }: ButtonProps) => {
  return (
    <>
      <ButtonStyles onPress={onCLick}>
        <Font16400>{ButtonLable}</Font16400>
      </ButtonStyles>
    </>
  );
};

export default PrimaryButton;
