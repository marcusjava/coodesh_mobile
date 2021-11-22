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

const Item = ({ data, onPress, idx }) => {
  const { name, gender, dob, phone, picture } = data;

  return (
    <>
      <Container
        accessibilityLabel="pacient item"
        onPress={onPress}
        testID={`pacient-${idx}`}
      >
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
