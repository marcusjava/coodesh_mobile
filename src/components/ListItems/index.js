import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, FlatList } from "react-native";

import { Container, NoItems } from "./styles/listItems";
import { usePacient } from "../../context/pacient";
import Item from "../Item";
import Modal from "../Modal";
import { Portal } from "react-native-portalize";

const ListItems = () => {
  const [detail, setDetail] = useState({});
  const { pacients, loadMore, search } = usePacient();

  let data = search.length > 0 ? search : pacients;

  const modalRef = useRef(null);

  const openModal = (item) => {
    setDetail(item);
    modalRef.current?.open();
  };

  return (
    <Container>
      <FlatList
        testID="flatlist"
        horizontal={false}
        showsVerticalScrollIndicator={false}
        accessibilityLabel="pacients list"
        data={data}
        renderItem={({ item, index }) => {
          return (
            <Item
              data={item}
              idx={index}
              onPress={() => {
                openModal(item);
              }}
            />
          );
        }}
        keyExtractor={(item) => String(item.id)}
        onEndReachedThreshold={0.7}
        onEndReached={loadMore}
        ListEmptyComponent={() => <NoItems>No Items</NoItems>}
        ListFooterComponent={() => {
          /* 
            ao exibir o resultado da pesquisa o loading 
            é acionado por conta do onEndReachedThreshold e do onEndReached
          
          */
          if (search.length > 0) return null;
          //se nao houver items...
          if (data.length === 0) return null;
          return (
            <View>
              <ActivityIndicator size="large" color="#292961" />
            </View>
          );
        }}
      />
      <Portal>
        <Modal modalRef={modalRef} detail={detail} />
      </Portal>
    </Container>
  );
};

export default ListItems;
