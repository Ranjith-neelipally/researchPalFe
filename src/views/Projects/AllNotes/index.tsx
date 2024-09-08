import React from "react";
import {
  Flex1,
  FlexRow,
  HeaderCard,
  Padding20,
  ProjectsWrapper,
} from "../styles";
import { Text, View } from "react-native";
import {
  Font14400,
  Font14600,
  Font14Danger,
  Font14white,
} from "../../../commonStyles/styles";
import Card from "../../../CoreComponents/Card";
import { AllNotesWrapper, CardBody } from "./styles";
import { useNavigation } from "@react-navigation/native";

function AllNotes({ navigation }) {
  const nav = useNavigation();
  const handleNoteDetails = () => {
    (navigation ?? nav).navigate("NoteDetails");
  };
  return (
    <ProjectsWrapper>
      <Padding20>
        <HeaderCard>
          <View>
            <Font14600>All</Font14600>
          </View>
          <FlexRow>
            <Font14600>Treatments:</Font14600>
            <Font14Danger>R1_T1</Font14Danger>
          </FlexRow>
        </HeaderCard>
      </Padding20>
      <Flex1>
        <AllNotesWrapper>
          <Card backgroundColor="#13140f" onClick={handleNoteDetails}>
            <CardBody>
              <>
                <Font14white>Note</Font14white>
              </>
              <>
                <Font14white>Image</Font14white>
              </>
            </CardBody>
          </Card>
        </AllNotesWrapper>
      </Flex1>
    </ProjectsWrapper>
  );
}

export default AllNotes;
