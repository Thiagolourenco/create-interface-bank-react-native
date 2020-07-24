import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Index from "./src";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#29304D" barStyle="light-content" />
      <Index />
    </NavigationContainer>
  );
}
