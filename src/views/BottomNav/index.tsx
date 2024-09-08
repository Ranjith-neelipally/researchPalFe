import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BottomNav, NavElement } from "./styles";
import { DFlex, Font22 } from "../../commonStyles/styles";

interface BottomNavigationProps {
  navigation?: any;
}

function BottomNavigation({ navigation }: BottomNavigationProps) {
  const nav = useNavigation();

  return (
    <BottomNav>
      <NavElement onPress={() => (navigation ?? nav).navigate("Home")}>
        <Text>Home</Text>
      </NavElement>
      <NavElement onPress={() => (navigation ?? nav).navigate("Project")}>
        <Text>Projects</Text>
      </NavElement>
    </BottomNav>
  );
}

export default BottomNavigation;
