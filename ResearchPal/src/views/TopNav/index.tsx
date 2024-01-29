import { View, Text } from "react-native";
import React from "react";
import { ProfilePic, ProfileWrapper, TopNavStyles } from "./styles";
import ProfileIcon from "../../assets/ProfileIcon";
import { DFlex, Font16400, Font16600 } from "../../commonStyles/styles";

interface TopNavBarProps {
  image?: string;
  GreetingString?: string;
  anotherString?: string;
}

const TopNavBar = ({
  image,
  GreetingString = "hello",
  anotherString = "ResearchPal",
}: TopNavBarProps) => {
  return (
    <TopNavStyles>
      <ProfileWrapper>
        <ProfilePic>
          {!image ? (
            <ProfileIcon height={"20"} width={"20"} />
          ) : (
            <>
              <img />
            </>
          )}
        </ProfilePic>
        <View>
          {GreetingString && (
            <View>
              <Font16400>{GreetingString}</Font16400>
            </View>
          )}
          <View>
            <Font16600>{anotherString}</Font16600>
          </View>
        </View>
      </ProfileWrapper>
      <View>
        <Text>settings</Text>
      </View>
    </TopNavStyles>
  );
};

export default TopNavBar;
