import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 500px;
  padding-bottom: 50px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 35px;
  margin-bottom: 50px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #4b5c6b;
  font-size: 50px;
`;

export const NoItems = styled.Text`
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 30px;
  color: #4b5c6b;
`;
