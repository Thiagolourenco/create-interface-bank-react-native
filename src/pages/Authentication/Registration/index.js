import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";
import { SvgUri } from "react-native-svg";
import RNPickerSelect from "react-native-picker-select";
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from "react-native-country-picker-modal";

import styles from "./styles";
import { colors } from "../../../constants/colors";
import ModalSelectCountry from "../../../components/ModalSelectCountry";

export default function Registration() {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState("");
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   async function loadCountry() {
  //     await axios
  //       .get("https://restcountries.eu/rest/v2/all")
  //       .then((res) => {
  //         let country = res.data.map((item, index) => {
  //           return { label: item.name, value: item };
  //         });
  //         console.log("COUNTY", country);
  //         setCountry(country);
  //       })
  //       .catch((err) => console.log("ERROR", err));
  //   }

  //   loadCountry();
  // }, []);

  function handleStart() {
    navigation.navigate("Verification");
  }

  console.log("COUNTRY", countryCode);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btnGoBack}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={24} color={colors.dark} />
      </TouchableOpacity>

      <Text style={styles.title}>Registration</Text>
      {/* <SvgUri
        width="40"
        height="40"
        uri="https://restcountries.eu/data/dza.svg"
      /> */}

      <KeyboardAwareScrollView>
        <Text style={styles.subTitle}>
          Enter your mobile number, we will send you OTP to verify later
        </Text>
        <Text style={styles.inputLabel}>Enter your location</Text>

        <View style={styles.viewInput}>
          <TouchableOpacity
            onPress={() => setVisible(true)}
            style={{
              height: 40,
              width: 40,
              borderRightColor: "#eee",
              borderRightWidth: 1,
            }}
          />
          <TextInput
            placeholder="Russia"
            placeholderTextColor={colors.dark}
            style={styles.input}
          />
        </View>
        <Text style={styles.textPhone}>Enter your phone</Text>
        <View style={styles.viewInput}>
          <View style={styles.viewInputSelect} />
          <TextInput
            placeholder="85997600097"
            placeholderTextColor={colors.dark}
            style={styles.input}
            keyboardType="name-phone-pad"
          />
        </View>

        <View style={styles.viewGroupButton}>
          <RectButton style={styles.buttonStart} onPress={handleStart}>
            <Text style={styles.buttonStartText}>Start using</Text>
          </RectButton>
          <Text style={styles.textBottom}>
            By checking start you agree to our
          </Text>
          <Text style={styles.textButtonPrivacy}>Privacy Policy and terms</Text>
        </View>
        <ModalSelectCountry
          visible={visible}
          onRequestClose={() => setVisible(false)}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
