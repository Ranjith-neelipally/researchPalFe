import { View, Text, ScrollView, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import {
  Cell,
  CellsContainer,
  Flex1,
  FlexRow,
  Header,
  ModalStyles,
  Padding20,
  ProjectsWrapper,
} from "../styles";
import Input from "../../../CoreComponents/TextInput";
import PrimaryButton from "../../../CoreComponents/Button";
import Card from "../../../CoreComponents/Card";
import { Font22 } from "../../../commonStyles/styles";
import { useNavigation } from "@react-navigation/native";
interface NewprojectProps {
  navigation?: any;
}

const NewProject = ({ navigation }: NewprojectProps) => {
  const [formValues, setformValues] = useState([]);
  const [replications, setreplications] = useState(4);
  const [Treatments, setTreatments] = useState(4);
  const [ContainerWidth, setContainerWidth] = useState(480);
  const [confirm, setConfirm] = useState(true);
  const [treatmentForm, settreatmentForm] = useState([
    {
      treatmentTitle: "",
      identityColor: "",
    },
  ]);

  const [isModalId, setisModalId] = useState();

  const [isModal, setisModal] = useState(false);
  const [isTitleEdited, setisTitleEdited] = useState(false);

  const formElements = [
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

  const onChaneEvent = (value: any, key: string) => {
    if (key === "replications") {
      setreplications(value);
    }
    if (key === "treatments") {
      setTreatments(value);
    }
    setformValues({ ...formValues, [key]: value });
  };

  const CellClickHandler = (id) => {
    console.log("cell clicked", id);
    setisModalId(id);
    setisModal(!isModal);
  };

  const handleCardClick = (index) => {
    setisTitleEdited(!isTitleEdited);
  };

  const nav = useNavigation();
  const handlePrimaryButtonClick = () => {
    console.log("clicked");
    console.log(confirm, "confirm");
    if (confirm === true) {
      setConfirm(!confirm);
    } else {
      (navigation ?? nav).navigate("Project");
    }
    setConfirm(!confirm);
  };

  return (
    <ProjectsWrapper>
      <ModalStyles>
        <>
          <Flex1>
            <ScrollView>
              {confirm ? (
                <>
                  <Flex1>
                    <>
                      {formElements.map((Item, index) => (
                        <Input
                          label={Item.label}
                          onChange={(value) => onChaneEvent(value, Item.value)}
                          asterisk={true}
                          value={formValues[Item.value]}
                          type={
                            Item.value === "replications" ||
                            Item.value === "treatments"
                              ? "numeric"
                              : "default"
                          }
                        />
                      ))}
                    </>
                  </Flex1>
                </>
              ) : (
                <>
                  <>
                    {Array.from({ length: Treatments }).map((_, index) => (
                      <Card
                        key={index}
                        identifer={`T${index + 1}`}
                        onClick={() => handleCardClick(`T${index + 1}`)}
                        cardTitle={
                          <>
                            {isTitleEdited ? (
                              <>
                                <View style={{ minWidth: 200 }}>
                                  <Input
                                    value={`Treatment ${index + 1}`}
                                    margin="0"
                                  />
                                </View>
                              </>
                            ) : (
                              <>
                                <Text>{`Treatment ${index + 1}`}</Text>
                              </>
                            )}
                          </>
                        }
                      />
                    ))}
                  </>
                  <Modal transparent={true} visible={isModal}>
                    <Flex1
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      <View
                        style={{
                          backgroundColor: "white",
                          padding: 12,
                          borderRadius: 12,
                          borderWidth: 1,
                          borderColor: "gray",
                          width: "80%",
                          gap: 16,
                        }}
                      >
                        <Font22>{isModalId}</Font22>
                        <>
                          <Input label="repetition" />
                          <Input label="Treatment" />
                        </>
                        <PrimaryButton
                          ButtonLable="save"
                          onCLick={() => CellClickHandler("ok")}
                        />
                      </View>
                    </Flex1>
                  </Modal>
                </>
              )}
            </ScrollView>
          </Flex1>
        </>
        <>
          <Flex1>
            <CellsContainer>
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
                            onPress={() =>
                              CellClickHandler(
                                `C${colIndex + 1}-R${rowIndex + 1}`
                              )
                            }
                          >
                            {formValues && (
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
        </>
        <>
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              paddingRight: 12,
              paddingBottom: 12,
            }}
          >
            <View style={{ minWidth: "30%" }}>
              <PrimaryButton
                ButtonLable={confirm === false ? "Confirm" : "Next"}
                onCLick={handlePrimaryButtonClick}
              />
            </View>
          </View>
        </>
      </ModalStyles>
    </ProjectsWrapper>
  );
};

export default NewProject;
