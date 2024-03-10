import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Home from "./src/views/Home";
import Projects from "./src/views/Projects";
import SignUp from "./src/views/SignUp";
import SignIn from "./src/views/Signin";
import { StatusBar, SafeAreaView, StyleSheet, Platform } from "react-native";
import { SafeAreaView as AndroidWrapper } from "react-native-safe-area-context";
import TopNavBar from "./src/views/TopNav";
import BottomNavigation from "./src/views/BottomNav";

const AuthenticationStack = createNativeStackNavigator();
const MainAppStack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
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

const MainAppNavigator = () => {
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
      <TopNavBar />
      <MainAppStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          navigationBarColor: Colors.SecondaryColor,
        }}
      >
        <MainAppStack.Screen name="Project" component={Projects} />
        <MainAppStack.Screen name="Home" component={Home} />
      </MainAppStack.Navigator>
      <BottomNavigation />
    </SafeAreaWrapper>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <NavigationContainer>
      {!isAuthenticated ? <MainAppNavigator /> : <AuthenticationNavigator />}
    </NavigationContainer>
  );
};

export default App;
