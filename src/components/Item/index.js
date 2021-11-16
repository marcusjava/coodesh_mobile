import React from "react";
import dayjs from "dayjs";

import {
  Container,
  ImageContainer,
  Image,
  DetailContainer,
  Title,
  Description,
  InlineInfo,
} from "./styles/item";
import { usePacient } from "../../context/pacient";

const Item = ({ data, openModal }) => {
  const { setPacient } = usePacient();
  const { name, gender, dob, phone, picture } = data;

  const setItemAndDisplayModal = () => {
    setPacient(data);
    openModal();
  };

  return (
    <>
      <Container onPress={setItemAndDisplayModal}>
        <ImageContainer>
          <Image
            accessibilityLabel="Thumbnail"
            resizeMethod="resize"
            source={{
              uri: `${picture}`,
            }}
          />
        </ImageContainer>
        <DetailContainer>
          <Title>{name}</Title>
          <Description>{phone}</Description>
          <InlineInfo>
            <Description>{gender}</Description>
            <Description>{dob}</Description>
          </InlineInfo>
        </DetailContainer>
      </Container>
    </>
  );
};

export default Item;
