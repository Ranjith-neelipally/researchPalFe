import styled from "styled-components/native";
import Colors from "../../utils/colors";
import { DFlex } from "../../commonStyles/styles";

interface inputLabelProps {
  labelBackgroudColor?: string;
  error?: string;
  margin?: string;
}
interface InputCompProps {
  error?: string;
}
export const InputCompStyles = styled.View<InputCompProps>`
  border: 1px solid ${(props) => (props.error ? "red" : Colors.LightBroderGray)};
  padding: 12px 8px;
  border-radius: 50px;
  position: relative;
  ${DFlex}
`;

export const CustomInput = styled.TextInput`
  color: black;
  font-weight: 600;
  font-size: 14px;
  border: 0;
  max-height: 48px;
  padding: 0;
  padding-left: 12px;
  flex: 1;
`;

export const IconContainer = styled.Pressable`
  height: 24px;
  width: 24px;
`;

export const InputLabel = styled.Text<inputLabelProps>`
  background-color: ${(props) =>
    props.labelBackgroudColor
      ? props.labelBackgroudColor
      : Colors.FormLightGreen};
  position: absolute;
  top: -10px;
  left: 28px;
  padding: 0 4px;
  color: ${(props) => (props.error ? "red" : "black")};
`;

export const InputCompWrapper = styled.View<inputLabelProps>`
  margin-bottom: ${(props) => (props.margin ? props.margin : "16px")};
`;

export const ErrorMessage = styled.Text`
  color: red;
  padding-left: 12px;
`;
