import styled from "styled-components/native";
import { DFlex } from "../../../commonStyles/styles";
import Colors from "../../../utils/colors";

export const AllNotesWrapper = styled.View`
  background-color: ${Colors.FormDarkGreen};
  flex: 1;
  border-radius: 12px;
`;

export const CardBody = styled.View`
  flex: 1;
  ${DFlex}
  justify-content: space-between;
  padding: 4px;
`;
