import { View, Text, Platform, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SignUp from "../views/SignUp";
import SignIn from "../views/Signin";
import { SafeAreaView as AndroidWrapper } from "react-native-safe-area-context";

const AuthenticationNavigator = () => {
  const AuthenticationStack = createNativeStackNavigator();

  const SafeAreaWrapper =
    Platform.OS === "android" ? AndroidWrapper : SafeAreaView;
  return (
    <SafeAreaWrapper
      style={{
        flex: 1,
        backgroundColor: Colors.SecondaryColor,
      }}
    >
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" />
      <AuthenticationStack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerShown: false,
          navigationBarColor: Colors.SecondaryColor,
        }}
      >
        <AuthenticationStack.Screen name="SignUp" component={SignUp} />
        <AuthenticationStack.Screen name="SignIn" component={SignIn} />
      </AuthenticationStack.Navigator>
    </SafeAreaWrapper>
  );
};

export default AuthenticationNavigator;
