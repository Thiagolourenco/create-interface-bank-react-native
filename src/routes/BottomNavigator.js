import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomePage from "../pages/HomePage";
import CardPage from "../pages/Card/CardPage";
import ProfileSettings from "../pages/Profile/ProfileSettings";
import MapPage from "../pages/Map/MapPage";

import { colors } from "../constants/colors";

const Bottom = createBottomTabNavigator();

const icons = {
  HomePage: {
    lib: AntDesign,
    name: "home",
  },
  CardPage: {
    lib: Entypo,
    name: "wallet",
  },
  MapPage: {
    lib: MaterialCommunityIcons,
    name: "map-search-outline",
  },
  ProfileSettings: {
    lib: AntDesign,
    name: "user",
  },
};

export default function BottomNavigator() {
  return (
    <Bottom.Navigator
      initialRouteName="HomeAdvisor"
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: colors.white,
        },
        activeTintColor: "rgba(36,56,136,1)",
        inactiveTintColor: "rgba(36,56,136,0.2)",
      }}
    >
      <Bottom.Screen name="HomePage" component={HomePage} options={{ title: "Home"}}/>
      <Bottom.Screen name="CardPage" component={CardPage} options={{ title: "Cards"}}/>
      <Bottom.Screen name="MapPage" component={MapPage} options={{ title: "Map"}}/>
      <Bottom.Screen name="ProfileSettings" component={ProfileSettings} options={{ title: "Profile"}} />
    </Bottom.Navigator>
  );
}
