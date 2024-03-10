import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import StudentWithLaptop from "../../assets/Student_laptop";
import {
  CommonImageContainer,
  Font22,
  ThemeBackGround,
  Padding28X20,
  FormContainer,
} from "../../commonStyles/styles";
import Input from "../../CoreComponents/TextInput";
import { useNavigation } from "@react-navigation/native";
import PasswordIcon from "../../assets/PasswordIcon";
import PrimaryButton from "../../CoreComponents/Button";
import UserIcon from "../../assets/userIcon";
import MailIcon from "../../assets/mailIcon";
import axios from "axios";

const SignUp = ({ navigation }) => {
  const nav = useNavigation();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorState, setErrorState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChangeEvent = (id, value) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [id]: value,
    }));

    setErrorState((prevState) => ({
      ...prevState,
      [id]: "",
    }));
  };

  const submithandler = async () => {
    let hasEmptyFields = false;

    for (const key in userDetails) {
      if (!userDetails[key]) {
        setErrorState((prevState) => ({
          ...prevState,
          [key]: `${key} is empty`,
        }));
        hasEmptyFields = true;
      }
    }

    if (!hasEmptyFields) {
      if (userDetails.password !== userDetails.confirmPassword) {
        setErrorState((prevState) => ({
          ...prevState,
          confirmPassword: "Passwords do not match",
        }));
      } else {
        try {
          if (!hasEmptyFields) {
            console.log("User Details:", userDetails);
            const response = await axios.post(
              "http://10.0.2.2:8000/api/user/signup",
              userDetails
            );
            console.log(response.data, "data");
            (navigation ?? nav).navigate("SignIn");
          }
        } catch (error) {
          (navigation ?? nav).navigate("SignIn");
          console.error("Error:", error);
        }
      }
    }
  };

  return (
    <ThemeBackGround>
      <CommonImageContainer>
        <StudentWithLaptop />
      </CommonImageContainer>
      <Padding28X20>
        <Font22>SignUp</Font22>
        <FormContainer>
          <Input
            label="User Name"
            onChange={(value) => onChangeEvent("username", value)}
            errorMesssage={errorState.username}
            icon={
              <>
                <UserIcon />
              </>
            }
          />
          <Input
            label="Email"
            type="email-address"
            onChange={(value) => onChangeEvent("email", value)}
            errorMesssage={errorState.email}
            icon={
              <>
                <MailIcon />
              </>
            }
          />
          <Input
            label="Password"
            icon={
              <>
                <PasswordIcon />
              </>
            }
            onChange={(value) => onChangeEvent("password", value)}
            errorMesssage={errorState.password}
            typePassword={true}
          />
          <Input
            label="Confirm Password"
            icon={
              <>
                <PasswordIcon />
              </>
            }
            onChange={(value) => onChangeEvent("confirmPassword", value)}
            errorMesssage={errorState.confirmPassword}
            typePassword={true}
          />
        </FormContainer>
        <PrimaryButton ButtonLable="Sign Up" onCLick={submithandler} />
      </Padding28X20>
    </ThemeBackGround>
  );
};

export default SignUp;
