import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex, Font16400 } from "../../commonStyles/styles";

export const ButtonStyles = styled.Pressable`
  padding: 12px;
  justify-content: center;
  border-radius: 24px;
`;
export const ButtonLabelText = styled(Font16400)`
  color: ${Colors.TeritoryColor};
`;
