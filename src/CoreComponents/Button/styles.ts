import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex } from "../../commonStyles/styles";

export const ButtonStyles = styled.TouchableOpacity`
  background-color: ${Colors.TeritoryColor};
  padding: 12px;
  ${DFlex}
  justify-content: center;
  border-radius: 24px;
`;
