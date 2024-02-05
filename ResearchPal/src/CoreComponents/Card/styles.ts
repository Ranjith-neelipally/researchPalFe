import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex } from "../../commonStyles/styles";

const DefaultDimension = 12;

export const CardWrapperStyles = styled.View`
  background-color: white;
  margin: ${DefaultDimension}px;
  padding: ${DefaultDimension}px;
  border-radius: ${DefaultDimension}px;
  ${DFlex}
  justify-content: space-between;
`;
export const CardLeftContainer = styled.View`
  background-color: ${Colors.SecondaryColor};
  padding: ${DefaultDimension}px;
  border-radius: 500px;
`;
