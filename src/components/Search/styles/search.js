import styled from "styled-components/native";

export const Container = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity``;

export const InputContainer = styled.View`
  position: relative;
`;

export const Input = styled.TextInput`
  width: 320px;
  height: 40px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  font-size: 18px;
  border: 3px solid #c5ced6;
`;
