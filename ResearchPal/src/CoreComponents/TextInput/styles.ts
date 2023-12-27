import styled from 'styled-components/native';
import Colors from '../../utils/colors';

export const InputCompStyles = styled.View`
  display: flex;
  border: 1px solid ${Colors.LightBroderGray};
  padding: 12px;
  border-radius: 50px;
  flex-direction: row;
`;

export const CustomInput = styled.TextInput`
  border: 1px solid;
  color: black;
  font-weight: 600;
  font-size: 16px;
  border: 0;
  max-height: 48px;
  padding: 0;
  padding-left: 12px;
`;
export const IconContainer = styled.View`
  height: 24px;
  width: 24px;
`;
