import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 30px;
  padding-right: 5px;
  padding-left: 5px;
  position: relative;
`;

export const Close = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  right: 10px;
`;

export const Image = styled.Image`
  height: 180px;
  width: 180px;
  border-radius: 90px;
`;

export const Title = styled.Text`
  color: #4b5c6b;
  font-weight: bold;
  font-size: 30px;

  margin-top: 15px;
  margin-bottom: 15px;
`;

export const DescriptionContainer = styled.View``;

export const Description = styled.Text`
  color: #4b5c6b;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 15px;
  font-weight: bold;
`;
