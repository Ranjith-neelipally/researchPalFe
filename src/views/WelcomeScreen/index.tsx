import { View, Text } from "react-native";
import React from "react";
import PrimaryButton from "../../CoreComponents/Button";
import Input from "../../CoreComponents/TextInput";
import StudentWithLaptop from "../../assets/Student_laptop";
import {
  ThemeBackGround,
  CommonImageContainer,
  Padding28X20,
  Font22,
  FormContainer,
  RotateReverse,
} from "../../commonStyles/styles";
import TeritoryButton from "../../CoreComponents/TeritoryButton";
import { Flex1 } from "../Projects/styles";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = ({ navigation }) => {
  const nav = useNavigation();
  const navigationHandler = (screenName: string) => {
    if (screenName === "signin") {
      (navigation ?? nav).navigate("SignIn");
    } else if (screenName === "SignUp") {
      (navigation ?? nav).navigate("SignUp");
    }
  };
  return (
    <ThemeBackGround>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "flex-end",
          flex: 1,
          gap: 12,
        }}
      >
        <RotateReverse>
          <CommonImageContainer>
            <RotateReverse style={{ display: "flex", gap: 22 }}>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <View style={{ width: 200 }}>
                  <PrimaryButton
                    ButtonLable="Signin"
                    onCLick={() => navigationHandler("signin")}
                  />
                </View>
              </View>
              <TeritoryButton
                ButtonLable="Don't have an account? sign up"
                ButtonLableColor="black"
                onCLick={() => navigationHandler("SignUp")}
              />
            </RotateReverse>
          </CommonImageContainer>
        </RotateReverse>
      </View>
    </ThemeBackGround>
  );
};

export default WelcomeScreen;
