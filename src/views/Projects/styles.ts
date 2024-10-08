import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex } from "../../commonStyles/styles";

interface Flex1props {
  margin?: boolean;
}
interface FlexRowProps {
  gap?: number;
}

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
  display: flex;
  flex: 1;
  flex-direction: column;
  border-radius: ${ModalBorderRad}px ${ModalBorderRad}px 0 0;
`;
export const Flex1 = styled.View<Flex1props>`
  margin: ${(props) => (props.margin === false ? "0px" : "12px")};
  flex: 1;
`;
export const CellsContainer = styled.View`
  /* border: 1px solid; */
  flex: 1;
  min-height: 250px;
  display: flex;
  padding: 12px;
  flex-direction: column;
  background-color: ${Colors.SteelGreen};
  border-radius: 12px;
`;

export const FlexRow = styled.View<FlexRowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "0px")};
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
export const PaddingTop20 = styled(Padding20)`
  padding: 25px 0 0 0;
`;

export const HeaderCard = styled.View`
  background-color: ${Colors.GreenHeaderColor};
  padding: 12px;
  border-radius: 16px;
  ${DFlex};
  justify-content: space-between;
`;
