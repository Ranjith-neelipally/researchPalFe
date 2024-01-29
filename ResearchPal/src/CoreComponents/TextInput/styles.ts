import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex } from "../../commonStyles/styles";

interface inputLabelProps {
  labelBackgroudColor?: string;
}

export const InputCompStyles = styled.View`
  border: 1px solid ${Colors.LightBroderGray};
  padding: 12px 8px;
  border-radius: 50px;
  position: relative;
  ${DFlex}
  margin-bottom: 16px;
`;

export const CustomInput = styled.TextInput`
  border: 1px solid;
  color: black;
  font-weight: 600;
  font-size: 14px;
  border: 0;
  max-height: 48px;
  padding: 0;
  padding-left: 12px;
  /* border: 1px solid; */
  flex: 1;
`;

export const IconContainer = styled.View`
  height: 24px;
  width: 24px;
  /* border: 1px solid; */
`;

export const InputLabel = styled.Text<inputLabelProps>`
  /* background-color: ${Colors.FormLightGreen}; */
  background-color: ${(props) =>
    props.labelBackgroudColor
      ? props.labelBackgroudColor
      : Colors.FormLightGreen};
  position: absolute;
  top: -10px;
  left: 28px;
  padding: 0 4px;
`;

