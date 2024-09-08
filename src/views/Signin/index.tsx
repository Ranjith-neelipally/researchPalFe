import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Input from "../../CoreComponents/TextInput";
import StudentWithLaptop from "../../assets/Student_laptop";
import {
  CommonImageContainer,
  Font22,
  ThemeBackGround,
  Padding28X20,
  FormContainer,
  RotateReverse,
} from "../../commonStyles/styles";
import PrimaryButton from "../../CoreComponents/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateAccessToken } from "../../Store/Auth/Slice";
import { getFromStorage, keys, saveToStorage } from "../../utils/asyncStorage";
import { View } from "react-native";
import Colors from "../../utils/colors";

const SignIn = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
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
          "http://10.0.2.2:3000/auth/login",
          userDetails
        );
        console.log(response.data, "data");
        if (response) {
          const accessToken = response.data.access_token;
          await saveToStorage(keys.AUTH_TOKEN, accessToken);
          const storedValue = await getFromStorage(keys.AUTH_TOKEN);
          console.log("Stored value:", storedValue);
          dispatch(
            updateAccessToken({
              accessToken,
              isAccessToken: true,
            })
          );
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ThemeBackGround>
      <View
        style={{ display: "flex", justifyContent: "space-between", flex: 1 }}
      >
        <View>
          <StudentWithLaptop />
        </View>

        <CommonImageContainer>
          <Padding28X20>
            <Font22>SignIn</Font22>
            <FormContainer>
              <Input
                label="Email"
                type={"email-address"}
                onChange={(value) => handleInputChangeEvent("email", value)}
                errorMesssage={emailErrorMessage}
                LabelBackgroundColor={Colors.SecondaryColor}
              />
              <Input
                label="Password"
                onChange={(value) => handleInputChangeEvent("password", value)}
                errorMesssage={passwordErrorMessage}
                typePassword={true}
                LabelBackgroundColor={Colors.SecondaryColor}
              />
            </FormContainer>
            <PrimaryButton
              ButtonLable="Go Home"
              onCLick={() => handleLogin()}
            />
          </Padding28X20>
        </CommonImageContainer>
      </View>
    </ThemeBackGround>
  );
};

export default SignIn;
