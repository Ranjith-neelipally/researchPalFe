import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex, Font16400 } from "../../commonStyles/styles";

interface ButtonLabelInterface {
  ButtonLableColor: string;
}

export const ButtonStyles = styled.TouchableOpacity`
  padding: 12px;
  justify-content: center;
  border-radius: 24px;
  padding: 12px;
  ${DFlex}
`;
export const ButtonLabelText = styled(Font16400)<ButtonLabelInterface>`
  color: ${(props) =>
    props.ButtonLableColor ? props.ButtonLableColor : Colors.TeritoryColor};
`;
