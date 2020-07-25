import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Switch, Dimensions } from "react-native";
import Animated, { multiply, divide } from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";

import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "../../../constants/colors";
import BollonScroll from "../../../components/BollonScroll";

const { width, height } = Dimensions.get("window");

export default function CardPage() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEnabledOnline, setIsEnabledOnline] = useState(false);
  const [isEnabledAtm, setIsEnabledAtm] = useState(true);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchOnline = () =>
    setIsEnabledOnline((previousState) => !previousState);
  const toggleSwitchAtm = () =>
    setIsEnabledAtm((previousState) => !previousState);

  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
  const data = [0, 1, 2];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Cards</Text>
        <AntDesign name="ellipsis1" size={40} color={colors.dark} />
      </View>
      <Text style={styles.subTitle}>2 physical card, 1 virtual card</Text>

      <View style={styles.btnGroup}>
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnText, { color: colors.dark }]}>
            Physical card
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={[styles.btnText, { color: "rgba(192,192,192,0.7)" }]}>
            Virtual card
          </Text>
        </TouchableOpacity>
      </View>

      <Animated.ScrollView
        ref={scroll}
        style={styles.viewScroll}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        {...scrollHandler}
      >
        {data.map((item) => (
          <View style={styles.viewCard} key={item} />
        ))}
      </Animated.ScrollView>

      <View style={styles.viewBollon}>
        {data.map((_, index) => (
          <BollonScroll
            key={index}
            currentIndex={divide(x, width)}
            {...{ index }}
          />
        ))}
      </View>

      <View style={styles.cardSettings}>
        <Text style={styles.cardSettingsTitle}>Card Settings</Text>

        <View style={styles.cardSettingsView}>
          <View style={styles.contentCard}>
            <MaterialCommunityIcons
              name="cellphone-nfc"
              size={24}
              color={colors.blue}
            />
            <Text style={styles.cardSettingsViewText}>Contactless Payment</Text>
          </View>

          <Switch
            trackColor={{ false: "#ccc", true: "#55efc4" }}
            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.cardSettingsView}>
          <View style={styles.contentCard}>
            <Octicons name="credit-card" size={24} color={colors.blue} />

            <Text style={styles.cardSettingsViewText}>Online Payment</Text>
          </View>

          <Switch
            trackColor={{ false: "#ccc", true: "#55efc4" }}
            thumbColor={isEnabledOnline ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchOnline}
            value={isEnabledOnline}
          />
        </View>
        <View style={styles.cardSettingsView}>
          <View style={styles.contentCard}>
            <Entypo name="old-phone" size={24} color={colors.blue} />
            <Text style={styles.cardSettingsViewText}>ATM Withdraws</Text>
          </View>

          <Switch
            trackColor={{ false: "#ccc", true: "#55efc4" }}
            thumbColor={isEnabledAtm ? "#ffffff" : "#ffffff"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchAtm}
            value={isEnabledAtm}
          />
        </View>
      </View>
    </View>
  );
}
