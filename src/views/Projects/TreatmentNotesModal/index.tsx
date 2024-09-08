import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from "react";
import {
  ModalStyles,
  NotesContainer,
  HeaderText,
  HeaderContainer,
} from "./styles";
import PrimaryButton from "../../../CoreComponents/Button";
import { FlexRow, Padding20 } from "../styles";
import Input from "../../../CoreComponents/TextInput";
interface NotesModalProps {
  isModalOpen?: boolean;
  noteId?: string;
  setIsModalClose?: (isModalOpen: boolean) => void;
}

const NotesModal = ({
  isModalOpen,
  noteId,
  setIsModalClose,
}: NotesModalProps) => {
  return (
    <>
      <Modal
        visible={isModalOpen}
        transparent={true}
        statusBarTranslucent={true}
        onRequestClose={() => setIsModalClose(false)}
      >
        <ModalStyles id={noteId}>
          <NotesContainer>
            <Padding20>
              <HeaderContainer>
                <HeaderText>Plot details {noteId}</HeaderText>
                <TouchableOpacity onPress={() => setIsModalClose(false)}>
                  <HeaderText>X</HeaderText>
                </TouchableOpacity>
              </HeaderContainer>
              <Input label="Plot Name" LabelBackgroundColor="white" />
              <PrimaryButton ButtonLable="close" />
            </Padding20>
          </NotesContainer>
        </ModalStyles>
      </Modal>
    </>
  );
};

export default NotesModal;
