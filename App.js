import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { PacientProvider } from "./src/context/pacient";
import { Host } from "react-native-portalize";

//ActivityIndicator

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <PacientProvider>
        <Host>
          <Routes />
        </Host>
      </PacientProvider>
    </NavigationContainer>
  );
}
