import styled from "styled-components/native";
import { DFlex } from "../../../commonStyles/styles";

export const ModalStyles = styled.View`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 24px;
  flex: 1;
  ${DFlex}
  justify-content: center;
`;
export const NotesContainer = styled.View`
  background-color: white;
  min-width: 150px;
  min-height: 150px;
  border-radius: 12px;
  flex: 1;
`;
export const HeaderText = styled.Text`
  font-size: 16px;
  font-weight: 800;
`;
export const HeaderContainer = styled.View`
  ${DFlex}
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
