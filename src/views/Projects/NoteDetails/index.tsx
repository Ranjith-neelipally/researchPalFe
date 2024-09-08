import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Flex1, FlexRow, Header, Padding20, ProjectsWrapper } from "../styles";
import { Font14white, Font16600 } from "../../../commonStyles/styles";
import PrimaryButton from "../../../CoreComponents/Button";
import TeritoryButton from "../../../CoreComponents/TeritoryButton";

const NodeDetails = () => {
  return (
    <ProjectsWrapper>
      <Header>
        <Padding20>
          <FlexRow style={{ justifyContent: "space-between" }}>
            <FlexRow style={{ gap: 4 }}>
              <TouchableOpacity>
                <Font14white>back</Font14white>
              </TouchableOpacity>
              <Font14white>New Note</Font14white>
            </FlexRow>
          </FlexRow>
        </Padding20>
      </Header>
      <Flex1>
        <ScrollView>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="helo"
            style={{ color: "white", fontSize: 16 }}
          />
        </ScrollView>
      </Flex1>
      <Padding20>
        <FlexRow>
          <View>
            <PrimaryButton ButtonLable="Save" />
          </View>
          <View>
            <TeritoryButton ButtonLable="Cancel" />
          </View>
        </FlexRow>
      </Padding20>
    </ProjectsWrapper>
  );
};

export default NodeDetails;
