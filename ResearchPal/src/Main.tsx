import { View, Text } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainAppNavigator from "./HomeNav";
import AuthenticationNavigator from "./AuthNav";
import { useSelector } from "react-redux";
import { getAuthState } from "./Store/Auth/Slice";

const MainApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const AuthStste = useSelector(getAuthState);
  console.log(AuthStste, "State");
  return (
    <>
      <NavigationContainer>
        {!AuthStste.isAccessToken ? (
          <MainAppNavigator />
        ) : (
          <AuthenticationNavigator />
        )}
      </NavigationContainer>
    </>
  );
};

export default MainApp;
