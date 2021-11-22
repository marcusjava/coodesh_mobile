import React from "react";
import { View, Text } from "react-native";
import { Modalize } from "react-native-modalize";
import { usePacient } from "../../context/pacient";
import dayjs from "dayjs";

import {
  Container,
  Image,
  Title,
  Description,
  DescriptionContainer,
  Close,
} from "./styles/modal";
import { FontAwesome } from "@expo/vector-icons";

/* 

Imagem
Nome completo
Email
Gênero
Data de nascimento
Telefone
Nacionalidade
Endereço
ID (Número de identificação)

*/

const Modal = ({ modalRef, detail }) => {
  return (
    <Modalize ref={modalRef} accessibilityLabel="modal">
      <Container>
        <Close>
          <FontAwesome
            name="close"
            size={30}
            onPress={() => modalRef.current?.close()}
          />
        </Close>
        <Image source={{ uri: detail.picture }} />
        <Title>{detail.name}</Title>
        <DescriptionContainer>
          <Description>Email: {detail.email}</Description>
          <Description>Contato: {detail.phone}</Description>
          <Description>Endereço: {detail.location}</Description>
          <Description>Genero: {detail.gender}</Description>
          <Description>Nasc: {detail.dob}</Description>
          <Description>Nacionalidade: {detail.nat}</Description>
          <Description>ID: {detail.id}</Description>
        </DescriptionContainer>
      </Container>
    </Modalize>
  );
};

export default Modal;
