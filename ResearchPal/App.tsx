import React, { useState } from "react";
import { Platform, SafeAreaView, StatusBar, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./src/views/SignUp";
import Home from "./src/views/Home";
import Projects from "./src/views/Projects";
import Colors from "./src/utils/colors";
import BottomNavigation from "./src/views/BottomNav";
import TopNavBar from "./src/views/TopNav";
import { SafeAreaView as AndroidWrapper } from "react-native-safe-area-context";
const Stack = createNativeStackNavigator();

function App() {
  console.log("height in app");

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
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            navigationBarColor: Colors.SecondaryColor,
          }}
        >
          <Stack.Screen name="Project" component={Projects} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaWrapper>
  );
}

export default App;
