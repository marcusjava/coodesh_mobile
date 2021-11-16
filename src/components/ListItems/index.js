import React, { useRef } from "react";
import { View, Text } from "react-native";
import { ActivityIndicator, FlatList } from "react-native";

import { Container, NoItems } from "./styles/listItems";
import { usePacient } from "../../context/pacient";
import Item from "../Item";
import Modal from "../Modal";

const ListItems = () => {
  const { pacients, loadMore, search, loading } = usePacient();

  const data = search.length > 0 ? search : pacients;

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current?.open();
  };

  return (
    <Container>
      <FlatList
        horizontal={false}
        showsVerticalScrollIndicator={false}
        accessibilityLabel="pacients list"
        data={data}
        renderItem={({ item }) => {
          return <Item data={item} openModal={openModal} />;
        }}
        keyExtractor={(item) => String(item.id)}
        onEndReachedThreshold={0.1}
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

      <Modal modalRef={modalRef} />
    </Container>
  );
};

export default ListItems;
