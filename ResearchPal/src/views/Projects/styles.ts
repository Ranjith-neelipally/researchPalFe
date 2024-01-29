import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex } from "../../commonStyles/styles";

const ButtonDimensions = 50;
const ModalBorderRad = 16;
const CellDimensions = 60;

export const ProjectsWrapper = styled.View`
  background-color: ${Colors.DarkBackground};
  flex: 1;
`;

export const Padding20 = styled.View`
  padding: 20px;
`;
export const AddBtton = styled.TouchableOpacity`
  position: absolute;
  bottom: 7%;
  right: 8%;
  background-color: ${Colors.TeritoryColor};
  height: ${ButtonDimensions}px;
  width: ${ButtonDimensions}px;
  ${DFlex}
  justify-content: center;
  border-radius: 500px;
`;
export const ModalStyles = styled.View`
  background-color: ${Colors.FormLightGreen};
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  height: 90%;
  width: 100%;
  padding-top: 12px;
  border-radius: ${ModalBorderRad}px ${ModalBorderRad}px 0 0;
`;
export const Flex1 = styled.View`
  margin: 12px;
  flex: 1;
`;
export const CellsContainer = styled.View`
  /* border: 1px solid; */
  flex: 1;
  height: 250px;
  display: flex;
  padding: 12px;
  flex-direction: column;
  background-color: ${Colors.SteelGreen};
  border-radius: 12px;
`;

export const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Cell = styled.TouchableOpacity`
  /* border: 1px solid; */
  /* margin: 2px; */
  ${DFlex}
  justify-content: center;
  flex: 1;
  width: 100%;
  min-width: ${CellDimensions}px;
  min-height: ${CellDimensions}px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
