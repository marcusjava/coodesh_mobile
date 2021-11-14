import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 3px solid #c3cfd9;
`;

export const ImageContainer = styled.View`
  width: 30%;
`;

export const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const DetailContainer = styled.View`
  width: 70%;
`;

export const Title = styled.Text`
  color: #4b5c6b;
  font-weight: bold;
  font-size: 20px;
`;

export const Description = styled.Text`
  color: #4b5c6b;
  margin-top: 2px;
  margin-bottom: 2px;
`;

export const InlineInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
