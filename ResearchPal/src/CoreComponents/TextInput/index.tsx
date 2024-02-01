import React from "react";
import {
  CustomInput,
  ErrorMessage,
  IconContainer,
  InputCompStyles,
  InputCompWrapper,
  InputLabel,
} from "./styles";
import PasswordIcon from "../../assets/PasswordIcon";
interface TextInput {
  password?: boolean;
  label?: string;
  onChange?: any;
  LabelBackgroundColor?: string;
  placeHolder?: string;
  errorMesssage?: string;
  asterisk?: boolean;
  value?: any;
  type?: any;
}
const Input = ({
  password,
  label,
  onChange,
  LabelBackgroundColor,
  placeHolder,
  errorMesssage,
  asterisk = false,
  value,
  type = "default",
}: TextInput) => {
  return (
    <InputCompWrapper>
      <InputCompStyles error={errorMesssage}>
        {password && (
          <IconContainer>
            <PasswordIcon />
          </IconContainer>
        )}
        {label && (
          <InputLabel
            labelBackgroudColor={LabelBackgroundColor}
            error={errorMesssage}
          >
            {label}
            {asterisk && <ErrorMessage> *</ErrorMessage>}
          </InputLabel>
        )}

        <CustomInput
          placeholder={placeHolder ? placeHolder : label}
          onChangeText={onChange}
          value={value}
          keyboardType={type}
        />
        {password && (
          <IconContainer>
            <PasswordIcon />
          </IconContainer>
        )}
      </InputCompStyles>
      {errorMesssage && <ErrorMessage>{errorMesssage}</ErrorMessage>}
    </InputCompWrapper>
  );
};

export default Input;
