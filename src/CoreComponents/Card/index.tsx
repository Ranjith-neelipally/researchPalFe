import { View, Text } from "react-native";
import React from "react";
import {
  CardLeftContainer,
  CardWrapperStyles,
  TouchableCardWrapperStyles,
} from "./styles";
import { FlexRow } from "../../views/Projects/styles";

export interface CardProps {
  identifer?: string;
  cardTitle?: string | React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: string;
}

export default function Card({
  identifer = "T1",
  cardTitle = "Card",
  children,
  onClick,
  backgroundColor,
}: CardProps) {
  const CardWrapper: any = onClick
    ? TouchableCardWrapperStyles
    : CardWrapperStyles;
  return (
    <>
      <CardWrapper backgroundColor={backgroundColor} onPress={onClick}>
        {children ? (
          children
        ) : (
          <>
            <FlexRow gap={12}>
              <CardLeftContainer>
                <Text>{identifer}</Text>
              </CardLeftContainer>
              <Text>{cardTitle}</Text>
            </FlexRow>
            <Text>Icons</Text>
          </>
        )}
      </CardWrapper>
    </>
  );
}
