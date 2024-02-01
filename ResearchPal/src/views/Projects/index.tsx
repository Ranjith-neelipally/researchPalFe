import { Text, ScrollView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  AddBtton,
  Cell,
  CellsContainer,
  Flex1,
  FlexRow,
  Header,
  ModalStyles,
  Padding20,
  PaddingTop20,
  ProjectsWrapper,
} from "./styles";
import { FlexCenter, Font22, Font22White } from "../../commonStyles/styles";
import Input from "../../CoreComponents/TextInput";
import PrimaryButton from "../../CoreComponents/Button";
import NotesModal from "./TreatmentNotesModal";
import TeritoryButton from "../../CoreComponents/TeritoryButton";
import Card from "../../CoreComponents/Card";

export default function Projects() {
  const [isEmpty, setisEmpty] = useState(false);
  const [newForm, setnewForm] = useState(false);
  const [formData, setFormData] = useState({
    projectTitle: "",
    location: "",
    replications: "",
    treatments: "",
  });
  const [replications, setreplications] = useState(4);
  const [Treatments, setTreatments] = useState(4);
  const [ContainerWidth, setContainerWidth] = useState(480);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteId, setNoteId] = useState("");
  const [errors, setErrors] = useState({
    projectTitle: "",
    location: "",
    replications: "",
    treatments: "",
  });

  const [showBackButton, setshowBackButton] = useState(false);
  const [headerButtonLabel, setHeaderButtonLabel] = useState("");

  const [TreatmentForm, setTreatmentForm] = useState(false);

  const Button = () => {
    setHeaderButtonLabel("");
    setErrors({
      projectTitle: "",
      location: "",
      replications: "",
      treatments: "",
    });
    setnewForm(!newForm);
    setshowBackButton(false);
  };

  const BackButton = () => {
    setHeaderButtonLabel("Close");
    setTreatmentForm(false);
    setnewForm(true);
    setshowBackButton(true);
  };

  const hardClose = () => {
    setFormData({
      projectTitle: "",
      location: "",
      replications: "",
      treatments: "",
    });
    setnewForm(false);
    setTreatments(4);
    setreplications(4);
  };

  const CellClickHandler = (id) => {
    console.log("cell clicked", id);
    if (TreatmentForm) {
      setIsModalOpen(true);
      setNoteId(id);
    }
  };
  const SubmitButtton = () => {
    let isError = false;

    const newErrors = { ...errors };

    for (const key in formData) {
      if (!formData[key]) {
        newErrors[key] = "Please fill in this field.";
        isError = true;
      } else {
        newErrors[key] = "";
      }
    }

    setErrors(newErrors);

    if (isError) {
      console.log("Error: Please fill in all fields.");
      setHeaderButtonLabel("");
    } else {
      console.log(formData, "formData");
    }
    setTreatmentForm(true);
    setHeaderButtonLabel("Back");
  };

  const onChangeEvent = (value, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    if (field === "replications") {
      setreplications(value);
    }

    if (field === "treatments") {
      setTreatments(value);
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: value ? "" : "Please fill in this field.",
    }));
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every((val) => val !== "");
    if (allFieldsFilled && !TreatmentForm && newForm) {
      setHeaderButtonLabel("Save and Continue");
    } else if (newForm && !TreatmentForm && !allFieldsFilled) {
      setHeaderButtonLabel("Close");
    } else if (TreatmentForm) {
      setHeaderButtonLabel("Back");
    } else {
      setHeaderButtonLabel("");
    }
  }, [formData, newForm, TreatmentForm]);

  const onContainerLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    setContainerWidth(width);
    console.log("Container width:", width);
  };

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
      label: "Treatments",
      value: "treatments",
    },
    {
      label: "Replications",
      value: "replications",
    },
  ];

  return (
    <ProjectsWrapper>
      <Padding20>
        <Header>
          <Font22White>Projects</Font22White>
          {headerButtonLabel && (
            <TeritoryButton
              ButtonLable={headerButtonLabel}
              onCLick={
                headerButtonLabel === "Close"
                  ? Button
                  : headerButtonLabel === "Back"
                  ? BackButton
                  : SubmitButtton
              }
            />
          )}
        </Header>
      </Padding20>

      <>
        {isEmpty ? (
          <>
            <FlexCenter>
              <Font22White>empty</Font22White>
            </FlexCenter>
          </>
        ) : (
          <Flex1 margin={false}>
            <Card />
          </Flex1>
        )}
      </>

      <AddBtton onPress={Button}>
        <Font22>+</Font22>
      </AddBtton>

      {newForm && (
        <>
          <ModalStyles>
            <>
              <Flex1>
                {!TreatmentForm && (
                  <PaddingTop20>
                    {Detains.map((Item, index) => (
                      <Input
                        key={index}
                        label={Item.label}
                        onChange={(value) => onChangeEvent(value, Item.value)}
                        errorMesssage={errors[Item.value]}
                        asterisk={true}
                        value={formData[Item.value]}
                        type={
                          Item.value === "replications" ||
                          Item.value === "treatments"
                            ? "numeric"
                            : "default"
                        }
                      />
                    ))}
                  </PaddingTop20>
                )}
                {TreatmentForm && (
                  <ScrollView>
                    <View>
                      <Font22>{formData.projectTitle}</Font22>
                      {Array.from({ length: Treatments }).map((_, index) => (
                        <View key={index}>
                          <Text>{index}</Text>
                          <Card />
                        </View>
                      ))}
                    </View>
                  </ScrollView>
                )}
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
                      {Array.from({ length: Treatments }).map((_, rowIndex) => (
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
                                {formData && TreatmentForm && (
                                  <Text>{`R${rowIndex + 1}, T${
                                    colIndex + 1
                                  }`}</Text>
                                )}
                              </Cell>
                            )
                          )}
                        </FlexRow>
                      ))}
                    </ScrollView>
                  </ScrollView>
                </CellsContainer>
              </Flex1>
              {showBackButton && !TreatmentForm && (
                <View
                  style={{
                    // maxWidth: "25%",
                    display: "flex",
                    // justifyContent: "flex-end",
                    // borderWidth: 1,
                    alignItems: "flex-end",
                    paddingRight: 12,
                    paddingBottom: 12,
                  }}
                >
                  <View style={{ minWidth: "30%" }}>
                    <PrimaryButton ButtonLable="Close" onCLick={hardClose} />
                  </View>
                </View>
              )}
            </>
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
