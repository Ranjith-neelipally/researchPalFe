import React, { useState } from "react";
import {
  CustomInput,
  ErrorMessage,
  IconContainer,
  InputCompStyles,
  InputCompWrapper,
  InputLabel,
} from "./styles";
import PasswordIcon from "../../assets/PasswordIcon";
import EyeClosed from "../../assets/eyeclosed";
import EyeOpen from "../../assets/eyeopen";
interface TextInput {
  label?: string;
  onChange?: any;
  LabelBackgroundColor?: string;
  placeHolder?: string;
  errorMesssage?: string;
  asterisk?: boolean;
  value?: any;
  type?: any;
  icon?: any;
  id?: string;
  typePassword?: boolean;
  margin?: string;
}
const Input = ({
  label,
  onChange,
  LabelBackgroundColor,
  placeHolder,
  errorMesssage,
  asterisk = false,
  value,
  type = "default",
  icon,
  id,
  typePassword,
  margin,
}: TextInput) => {
  const [isPasswordVisable, setisPasswordVisable] = useState(false);
  return (
    <InputCompWrapper margin={margin}>
      <InputCompStyles error={errorMesssage}>
        {icon && <IconContainer>{icon}</IconContainer>}
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
          id={id}
          secureTextEntry={isPasswordVisable}
        />
        {typePassword && (
          <IconContainer
            onPress={() => setisPasswordVisable(!isPasswordVisable)}
          >
            {isPasswordVisable ? <EyeClosed /> : <EyeOpen />}
          </IconContainer>
        )}
      </InputCompStyles>
      {errorMesssage && <ErrorMessage>{errorMesssage}</ErrorMessage>}
    </InputCompWrapper>
  );
};

export default Input;
