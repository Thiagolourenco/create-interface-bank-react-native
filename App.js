import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Location from "expo-location";

import LocationContext from "./src/context/location";
import Index from "./src";

export default function App() {
  const [locationUser, setLocationUser] = useState({});

  useEffect(() => {
    async function loadLocation() {
      let { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        console.log("OCORRERU UM ERROR");
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      setLocationUser({ latitude, longitude });
    }

    loadLocation();
  }, []);

  return (
    <NavigationContainer>
      <LocationContext.Provider value={{ location: locationUser }}>
        <StatusBar backgroundColor="#29304D" barStyle="light-content" />
        <Index />
      </LocationContext.Provider>
    </NavigationContainer>
  );
}
