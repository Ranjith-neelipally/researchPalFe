import styled from "styled-components/native";
import { DFlex } from "../../commonStyles/styles";

export const TopNavStyles = styled.View`
  ${DFlex}
  justify-content: space-between;
  padding: 4px 12px;
  height: 5.5%;
`;

export const ProfileWrapper = styled.View`
  ${DFlex}
`;

export const ProfilePic = styled.View`
  ${DFlex}
  justify-content: center;
  border: 1px solid;
  border-radius: 500px;
  padding: 4px;
`;
