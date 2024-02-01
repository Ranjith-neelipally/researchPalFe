import { View, Text } from "react-native";
import React from "react";
import { CardLeftContainer, CardWrapperStyles } from "./styles";

export default function Card() {
  return (
    <CardWrapperStyles>
      <CardLeftContainer>
        <Text>circle</Text>
      </CardLeftContainer>
      <Text>Card</Text>
      <Text>Icons</Text>
    </CardWrapperStyles>
  );
}
