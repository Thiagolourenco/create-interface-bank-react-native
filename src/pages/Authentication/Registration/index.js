import React from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { colors } from "../../../constants/colors";

export default function Registration() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("Verification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <Text style={styles.subTitle}>
        Enter your mobile number, we will send you OTP to verify later
      </Text>
      <Text style={styles.inputLabel}>Enter your location</Text>
      <View style={styles.viewInput}>
        <View style={styles.viewInputSelect} />
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
    </SafeAreaView>
  );
}
