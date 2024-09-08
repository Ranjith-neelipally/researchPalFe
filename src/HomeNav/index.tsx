import { View, Text, Platform, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView as AndroidWrapper } from "react-native-safe-area-context";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BottomNavigation from "../views/BottomNav";
import Home from "../views/Home";
import Projects from "../views/Projects";
import TopNavBar from "../views/TopNav";
import NewProject from "../views/Projects/NewProject";
import AllNotes from "../views/Projects/AllNotes";
import NodeDetails from "../views/Projects/NoteDetails";

const MainAppNavigator = () => {
  const MainAppStack = createNativeStackNavigator();
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
        initialRouteName="NewProject"
        screenOptions={{
          headerShown: false,
          navigationBarColor: Colors.SecondaryColor,
        }}
      >
        <MainAppStack.Screen name="Project" component={Projects} />
        <MainAppStack.Screen name="Home" component={Home} />
        <MainAppStack.Screen name="NewProject" component={NewProject} />
        <MainAppStack.Screen name="AllNotes" component={AllNotes} />
        <MainAppStack.Screen name="NoteDetails" component={NodeDetails} />
      </MainAppStack.Navigator>
      <BottomNavigation />
    </SafeAreaWrapper>
  );
};

export default MainAppNavigator;
