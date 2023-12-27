import styled from 'styled-components/native';
import Colors from '../utils/colors';

const ImageContainerBoderRadius = 120;

export const CommonImageContainer = styled.View`
  padding: 20px;
  background-color: ${Colors.SecondaryColor};
  border-radius: 0 0 ${ImageContainerBoderRadius}px
    ${ImageContainerBoderRadius}px;
  min-height: 40%;
`;
export const ThemeBackGround = styled.View`
  flex: 1;
  background-color: ${Colors.FormLightGreen};
`;
export const Font22 = styled.Text`
  font-size: 22px;
  font-weight: 400;
`;
export const Padding28X20 = styled.View`
  padding: 20px 28px;
`;

export const FormContainer = styled.View`
  padding: 12px 4px;
`;
