import styled, { css } from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex } from "../../commonStyles/styles";

const DefaultDimension = 12;

interface commonStylesProps {
  backgroundColor: string;
}

const commonStyles = css`
  margin: ${DefaultDimension}px;
  margin-bottom: 0;
  padding: ${DefaultDimension}px;
  border-radius: ${DefaultDimension}px;
  ${DFlex}
  justify-content: space-between;
`;

export const CardWrapperStyles = styled.View<commonStylesProps>`
  ${commonStyles}
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

export const TouchableCardWrapperStyles = styled.TouchableOpacity<commonStylesProps>`
  ${commonStyles}
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

export const CardLeftContainer = styled.View`
  background-color: ${Colors.SecondaryColor};
  padding: ${DefaultDimension}px;
  border-radius: 50px;
  width: 45px;
  height: 45px;
  overflow: hidden;
  ${DFlex}
  justify-content: center;
`;
