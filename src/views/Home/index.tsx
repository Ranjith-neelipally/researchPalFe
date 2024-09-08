import { Text, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../../CoreComponents/Button";
import Colors from "../../utils/colors";
import Input from "../../CoreComponents/TextInput";
import { FlexRow } from "../Projects/styles";
import Card from "../../CoreComponents/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState, updateAccessToken } from "../../Store/Auth/Slice";
import { getFromStorage, keys } from "../../utils/asyncStorage";

export default function Home() {
  const dispatch = useDispatch();
  const [authToken, setauthToken] = useState("");

  const handleClick = async () => {
    const token = await getFromStorage(keys.AUTH_TOKEN);
    if (token) {
      setauthToken(token);
    }
    console.log(authToken, "token");
  };
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJleGFtcGxlX3VzZXIiLCJ1c2VybmFtZSI6ImV4YW1wbGVfdXNlciIsImlhdCI6MTcxMDU5Njc0OCwiZXhwIjoxNzEwNTk2ODA4fQ.pfhfOMCHNiWCGL6r1996bJGUwPbQ4HMb8VQd0WmCJk0

  return (
    <View
      style={{ flex: 1, backgroundColor: Colors.DarkBackground, padding: 12 }}
    >
      <Input />
      <FlexRow>
        <Card />
        <Card />
      </FlexRow>
      <Text style={{ backgroundColor: "white" }}>{authToken}</Text>
      <PrimaryButton onCLick={() => handleClick()} />
    </View>
  );
}
