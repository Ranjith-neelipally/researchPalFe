import { Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  AddBtton,
  Cell,
  CellsContainer,
  Flex1,
  FlexRow,
  Header,
  ModalStyles,
  Padding20,
  ProjectsWrapper,
} from "./styles";
import { FlexCenter, Font22, Font22White } from "../../commonStyles/styles";
import Input from "../../CoreComponents/TextInput";
import PrimaryButton from "../../CoreComponents/Button";
import NotesModal from "./TreatmentNotesModal/inedx";
import TeritoryButton from "../../CoreComponents/TeritoryButton";

export default function Projects() {
  const [isEmpty, setisEmpty] = useState(true);
  const [newForm, setnewForm] = useState(true);
  const [formData, setFormData] = useState({
    projectTitle: "",
    location: "",
    replications: "",
    treatments: "",
  });
  const [replications, setreplications] = useState(5);
  const [Treatents, setTreatents] = useState(5);
  const [ContainerWidth, setContainerWidth] = useState(480);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteId, setNoteId] = useState("");
  const [isFormDataAvailable, setisFormDataAvailable] = useState(true);

  const Button = () => {
    console.log("hello");
    setnewForm(!newForm);
  };

  const SubmitButtton = () => {
    console.log(formData, "formData");
    console.log(isFormDataAvailable, "formData");
  };

  const CellClickHandler = (id) => {
    console.log("cell clicked", id);
    setIsModalOpen(true);
    setNoteId(id);
  };

  const onChangeEvent = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      projectTitle: value,
      location: value,
      replications: value,
      treatments: value,
    }));

    setisFormDataAvailable(true);
  };

  const onContainerLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
    console.log("Container width:", width);
  };
  console.log(replications, "repli");
  console.log(Treatents, "tret");

  const Detains = [
    {
      label: "Project Title",
      value: "projectTitle",
    },
    {
      label: "Location",
      value: "location",
    },
    {
      label: "Replications",
      value: "replications",
    },
    {
      label: "Treatments",
      value: "treatments",
    },
  ];

  return (
    <ProjectsWrapper>
      <Padding20>
        <Header>
          <Font22White>Projects</Font22White>
          <TeritoryButton ButtonLable="Save and Continue" />
        </Header>
      </Padding20>

      <>
        {isEmpty ? (
          <>
            <FlexCenter>
              <Font22White>Empty State</Font22White>
            </FlexCenter>
          </>
        ) : (
          <>
            <Font22White>Available data</Font22White>
          </>
        )}
      </>

      <AddBtton onPress={Button}>
        <Font22>+</Font22>
      </AddBtton>

      {newForm && (
        <>
          <ModalStyles>
            <ScrollView>
              <Flex1>
                {Detains.map((Item, index) => (
                  <Input
                    key={index}
                    label={Item.label}
                    onChange={(value) => onChangeEvent(value, Item.label)}
                  />
                ))}

                <PrimaryButton onCLick={SubmitButtton} ButtonLable="Submit" />
              </Flex1>
              <Flex1>
                <CellsContainer onLayout={onContainerLayout}>
                  <ScrollView horizontal={true}>
                    <ScrollView
                      style={{
                        minWidth: ContainerWidth,
                        backgroundColor: "white",
                        borderRadius: 12,
                      }}
                    >
                      {Array.from({ length: Treatents }).map((_, rowIndex) => (
                        <FlexRow key={rowIndex}>
                          {Array.from({ length: replications }).map(
                            (_, colIndex) => (
                              <Cell
                                key={colIndex}
                                style={{
                                  borderLeftWidth: colIndex !== 0 ? 1 : 0,
                                  borderBottomWidth: 1,
                                }}
                                id={`C${colIndex}R${rowIndex}`}
                                onPress={(id) =>
                                  CellClickHandler(
                                    `C${colIndex + 1}-R${rowIndex + 1}`
                                  )
                                }
                              >
                                <Text>{`R${rowIndex + 1}, T${
                                  colIndex + 1
                                }`}</Text>
                              </Cell>
                            )
                          )}
                        </FlexRow>
                      ))}
                    </ScrollView>
                  </ScrollView>
                </CellsContainer>
              </Flex1>
            </ScrollView>
          </ModalStyles>
          <NotesModal
            isModalOpen={isModalOpen}
            noteId={noteId}
            setIsModalClose={setIsModalOpen}
          />
        </>
      )}
    </ProjectsWrapper>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
  },
});
