import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomePage from "../pages/HomePage";
import CardPage from '../pages/Card/CardPage'
import ProfileSettings from '../pages/Profile/ProfileSettings'
import MapPage from '../pages/Map/MapPage'

const Bottom = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="HomePage" component={HomePage} />
      <Bottom.Screen name="CardPage" component={CardPage} />
      <Bottom.Screen name="MapPage" component={MapPage} />
      <Bottom.Screen name="ProfileSettings" component={ProfileSettings} />

    </Bottom.Navigator>
  );
}
