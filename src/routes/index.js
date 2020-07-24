import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "@expo/vector-icons/MaterialIcons";
import { RectButton } from "react-native-gesture-handler";

import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import Verification from "../pages/Authentication/Verification";
import YourInformation from "../pages/Authentication/YourInformation";
import Success from "../pages/Authentication/Success";

import BottomScrren from "./BottomNavigator";

import { colors } from "../constants/colors";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ mode: "card"}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: false,
          headerLeft: () => (
            <RectButton>
              <Icon name="keyboard-arrow-left" size={25} color={colors.dark} />
            </RectButton>
          ),
        }}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{
          headerShown: false,
          headerLeft: () => (
            <RectButton>
              <Icon name="keyboard-arrow-left" size={25} color={colors.dark} />
            </RectButton>
          ),
        }}
      />
      <Stack.Screen
        name="YourInformation"
        component={YourInformation}
        options={{
          headerShown: false,
          headerLeft: () => (
            <RectButton>
              <Icon name="keyboard-arrow-left" size={25} color={colors.dark} />
            </RectButton>
          ),
        }}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
          headerLeft: () => (
            <RectButton>
              <Icon name="keyboard-arrow-left" size={25} color={colors.dark} />
            </RectButton>
          ),
        }}
      />
      <Stack.Screen
        name="Home"
        component={BottomScrren}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
