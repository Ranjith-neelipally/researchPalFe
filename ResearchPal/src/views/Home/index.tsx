import { View } from "react-native";
import React from "react";
import PrimaryButton from "../../CoreComponents/Button";
import Colors from "../../utils/colors";
import Input from "../../CoreComponents/TextInput";
import { FlexRow } from "../Projects/styles";
import Card from "../../CoreComponents/Card";

export default function Home() {
  return (
    <View
      style={{ flex: 1, backgroundColor: Colors.DarkBackground, padding: 12 }}
    >
      <Input />
      <FlexRow>
        <Card />
        <Card />
      </FlexRow>
      <PrimaryButton onCLick={() => console.log("hello")} />
    </View>
  );
}
