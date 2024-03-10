import React, { useState } from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Input from "../../CoreComponents/TextInput";
import StudentWithLaptop from "../../assets/Student_laptop";
import {
  CommonImageContainer,
  Font22,
  ThemeBackGround,
  Padding28X20,
  FormContainer,
} from "../../commonStyles/styles";
import PrimaryButton from "../../CoreComponents/Button";
import axios from "axios";

const SignIn = ({ navigation }) => {
  const nav = useNavigation();
  const [userDetails, setuserDetails] = useState({
    email: "",
    password: "",
  });

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleInputChangeEvent = (id, value) => {
    setuserDetails((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));

    if (id === "email") setEmailErrorMessage("");
    if (id === "password") setPasswordErrorMessage("");
  };

  const handleLogin = async () => {
    let hasEmptyFields = false;

    if (!userDetails.email) {
      setEmailErrorMessage("Email is empty");
      hasEmptyFields = true;
    } else {
      setEmailErrorMessage("");
    }

    if (!userDetails.password) {
      setPasswordErrorMessage("Password is empty");
      hasEmptyFields = true;
    } else {
      setPasswordErrorMessage("");
    }

    try {
      if (!hasEmptyFields) {
        console.log("User Details:", userDetails);
        const response = await axios.post(
          "http://10.0.2.2:8000/auth/login",
          userDetails
        );
        console.log(response.data, "data");
        (navigation ?? nav).navigate("SignUp");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeBackGround>
      <CommonImageContainer>
        <StudentWithLaptop />
      </CommonImageContainer>
      <Padding28X20>
        <Font22>SignIn</Font22>
        <FormContainer>
          <Input
            label="Email"
            type={"email-address"}
            onChange={(value) => handleInputChangeEvent("email", value)}
            errorMesssage={emailErrorMessage}
          />
          <Input
            label="Password"
            onChange={(value) => handleInputChangeEvent("password", value)}
            errorMesssage={passwordErrorMessage}
            typePassword={true}
          />
        </FormContainer>
        <PrimaryButton ButtonLable="Go Home" onCLick={() => handleLogin()} />
      </Padding28X20>
    </ThemeBackGround>
  );
};

export default SignIn;
