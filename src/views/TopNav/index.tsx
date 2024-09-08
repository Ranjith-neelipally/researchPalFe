import { View, Text } from "react-native";
import React from "react";
import { ProfilePic, ProfileWrapper, TopNavStyles } from "./styles";
import ProfileIcon from "../../assets/ProfileIcon";
import { DFlex, Font16400, Font16600 } from "../../commonStyles/styles";
import PrimaryButton from "../../CoreComponents/Button";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState, updateAccessToken } from "../../Store/Auth/Slice";

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
  const dispatch = useDispatch();
  const handleLogout = useSelector(getAuthState);
  const Logout = () => {
    console.log("hello");
    const accessToken = "";
    
    dispatch(
      updateAccessToken({
        accessToken,
        isAccessToken: false,
      })
    );
  };
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
        <PrimaryButton ButtonLable="Logout" onCLick={() => Logout()} />
      </View>
    </TopNavStyles>
  );
};

export default TopNavBar;
