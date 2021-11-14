import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { PacientProvider } from "./src/context/pacient";

//ActivityIndicator

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <PacientProvider>
        <Routes />
      </PacientProvider>
    </NavigationContainer>
  );
}
