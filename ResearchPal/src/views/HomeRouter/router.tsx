import { View, Text, Platform, SafeAreaView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TopNavBar from "../TopNav";
import Colors from "../../utils/colors";
import { SafeAreaView as AndroidWrapper } from "react-native-safe-area-context";
import Projects from "../Projects";
import Home from "../Home";
import BottomNavigation from "../BottomNav";

const Stack = createNativeStackNavigator();

const HomeRouter = () => {
  const SafeAreaWrapper =
    Platform.OS === "android" ? AndroidWrapper : SafeAreaView;
  return (
    <SafeAreaWrapper>
      <TopNavBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Project" component={Projects} />
          <Stack.Screen name="Homes" component={Home} />
        </Stack.Navigator>
        <BottomNavigation />
      </NavigationContainer>
    </SafeAreaWrapper>
  );
};

export default HomeRouter;
