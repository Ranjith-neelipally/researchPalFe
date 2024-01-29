import React from "react";
import {
  CustomInput,
  IconContainer,
  InputCompStyles,
  InputLabel,
} from "./styles";
import PasswordIcon from "../../assets/PasswordIcon";
interface TextInput {
  password?: boolean;
  label?: string;
  onChange?: any;
  LabelBackgroundColor?: string;
  placeHolder?: string;
}
const Input = ({
  password,
  label,
  onChange,
  LabelBackgroundColor,
  placeHolder,
}: TextInput) => {
  return (
    <InputCompStyles>
      {password && (
        <IconContainer>
          <PasswordIcon />
        </IconContainer>
      )}
      {label && (
        <InputLabel labelBackgroudColor={LabelBackgroundColor}>
          {label}
        </InputLabel>
      )}

      <CustomInput
        placeholder={placeHolder ? placeHolder : label}
        onChangeText={onChange}
      />
      {password && (
        <IconContainer>
          <PasswordIcon />
        </IconContainer>
      )}
    </InputCompStyles>
  );
};

export default Input;
