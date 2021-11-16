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

const Modal = ({ modalRef }) => {
  const { pacient } = usePacient();
  return (
    <Modalize ref={modalRef}>
      <Container>
        <Close>
          <FontAwesome
            name="close"
            size={30}
            onPress={() => modalRef.current?.close()}
          />
        </Close>
        <Image source={{ uri: pacient.picture }} />
        <Title>{pacient.name}</Title>
        <DescriptionContainer>
          <Description>Email: {pacient.email}</Description>
          <Description>Contato: {pacient.phone}</Description>
          <Description>Endereço: {pacient.location}</Description>
          <Description>Genero: {pacient.gender}</Description>
          <Description>Nasc: {pacient.dob}</Description>
          <Description>Nacionalidade: {pacient.nat}</Description>
          <Description>ID: {pacient.id}</Description>
        </DescriptionContainer>
      </Container>
    </Modalize>
  );
};

export default Modal;
