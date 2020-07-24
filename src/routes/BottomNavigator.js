import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../pages/HomePage";

const Bottom = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="HomePage" component={HomePage} />
    </Bottom.Navigator>
  );
}
