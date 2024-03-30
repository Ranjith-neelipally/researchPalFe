import styled, { css } from "styled-components/native";
import Colors from "../utils/colors";

interface commonImageProps {
  borderTop?: boolean;
  boderBottom?: boolean;
}

const ImageContainerBoderRadius = 70;

const Font16 = styled.Text`
  font-size: 16px;
`;

export const CommonImageContainer = styled.View`
  padding: 20px;
  background-color: ${Colors.SecondaryColor};
  border-radius: 0 0 ${ImageContainerBoderRadius}px
    ${ImageContainerBoderRadius}px;
  min-height: 50%;
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

export const DFlex = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Font16600 = styled(Font16)`
  font-weight: 600;
`;

export const Font16400 = styled(Font16)`
  font-weight: 400;
`;

export const Font22White = styled(Font22)`
  color: white;
  font-weight: 700;
`;

export const FlexCenter = styled.View`
  ${DFlex}
  flex: 1;
  justify-content: center;
`;

export const RotateReverse = styled.View`
  transform: rotate(180deg);
`;
