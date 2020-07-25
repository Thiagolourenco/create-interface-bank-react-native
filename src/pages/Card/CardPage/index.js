import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  Dimensions,
  Image,
} from "react-native";
import Animated, { multiply, divide } from "react-native-reanimated";
import { interpolateColor, useScrollHandler } from "react-native-redash";
import { useNavigation } from '@react-navigation/native'

import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "../../../constants/colors";
import BollonScroll from "../../../components/BollonScroll";
import visaLogo from "../../../assets/simbolos.png";

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

  const navigation = useNavigation();
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
  const data = [0, 1, 2];

  function handleCardSettings() {
      navigation.navigate("CardSettings")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Cards</Text>
        <TouchableOpacity onPress={handleCardSettings}>
            <AntDesign name="ellipsis1" size={40} color={colors.dark} />
        </TouchableOpacity>
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
          <View style={styles.viewCard} key={item}>
            <View style={styles.viewCardHeader}>
              <Text style={styles.viewCardValue}>$2000.00</Text>
              <Image source={visaLogo} style={{ height: 40, width: 40 }} />
            </View>
            <View style={styles.viewCardNumber}>
              <Text style={styles.viewCardNumberText}>****</Text>
              <Text style={styles.viewCardNumberText}>****</Text>
              <Text style={styles.viewCardNumberText}>****</Text>

              <Text style={styles.viewCardNumberText}>1222</Text>
            </View>
            <View style={styles.viewCardFooter}>
              <View style={styles.viewCardFooterNameUser}>
                <Text style={styles.viewCardFooterNameText}>CARD HOLDER</Text>
                <Text style={styles.viewCardFooterNameTextValue}>
                  THIAGO L. S. SILVA
                </Text>
              </View>
              <View style={styles.viewCardFooterName}>
                <Text style={styles.viewCardFooterNameText}>EXPIRES</Text>
                <Text style={styles.viewCardFooterNameTextValue}>02/22</Text>
              </View>
              <View style={styles.viewCardFooterName}>
                <Text style={styles.viewCardFooterNameText}>CVV</Text>
                <Text style={styles.viewCardFooterNameTextValue}>274</Text>
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>

      {/* <View style={styles.viewBollon}>
        {data.map((_, index) => (
          <BollonScroll
            key={index}
            currentIndex={divide(x, width)}
            {...{ index }}
          />
        ))}
      </View> */}
      <View style={styles.viewBollon}>
        {data.map((item) => (
          <BollonScroll />
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
