import {View, Text} from 'react-native';
import React from 'react';
import {HeaderStyles} from './stylex';
import StudentWithLaptop from '../../assets/Student_laptop';
import {
  CommonImageContainer,
  Font22,
  ThemeBackGround,
  Padding28X20,
  FormContainer,
} from '../../commonStyles/styles';
import Input from '../../CoreComponents/TextInput';

const SignUp = () => {
  return (
    <ThemeBackGround>
      <CommonImageContainer>
        <StudentWithLaptop />
      </CommonImageContainer>
      <Padding28X20>
        <Font22>SignUp</Font22>
        <FormContainer>
          <Input />
        </FormContainer>
      </Padding28X20>
    </ThemeBackGround>
  );
};

export default SignUp;
