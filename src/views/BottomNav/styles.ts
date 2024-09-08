import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex } from "../../commonStyles/styles";

export const NavElement = styled.TouchableOpacity`
  border: 1px solid;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40px;
  align-items: center;
`;

export const BottomNav = styled.View`
  display: flex;
  background-color: ${Colors.FormLightGreen};
  flex-direction: row;
`;



