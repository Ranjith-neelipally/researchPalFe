import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {CustomInput, IconContainer, InputCompStyles} from './styles';
import EyeClosed from '../../assets/eyeclosed';
import PasswordIcon from '../../assets/PasswordIcon';

const Input = () => {
  return (
    <InputCompStyles>
      <IconContainer style={{borderWidth: 1}}>
        <PasswordIcon />
      </IconContainer>

      <CustomInput placeholder="hello" />
    </InputCompStyles>
  );
};

export default Input;
