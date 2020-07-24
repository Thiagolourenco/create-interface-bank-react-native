import React from "react";
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

import styles from "./styles";
import { colors } from "../../../constants/colors";

export default function YourInformation() {
  const navigation = useNavigation();

  function handleNavigateSuccess() {
    navigation.navigate("Success");
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btnGoBack}
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="ios-arrow-back" size={24} color={colors.dark} />
      </TouchableOpacity>
      <Text style={styles.title}>Fill your information</Text>
      <Text style={styles.subTitle}>Enter your details</Text>
      <Text style={styles.inputLabel}>Enter your email</Text>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="email@email.com"
          placeholderTextColor={colors.dark}
          style={styles.input}
          keyboardType="email-address"
        />
      </View>
      <Text style={styles.textPhone}>Enter your name and surname</Text>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Thiago Silva"
          placeholderTextColor={colors.dark}
          style={styles.input}
        />
      </View>
      <Text style={styles.textPhone}>Data of birth</Text>

      <View style={styles.viewInput}>
        <TextInput
          placeholder="20.07.1998"
          placeholderTextColor={colors.dark}
          style={styles.input}
        />
      </View>
      <Text style={styles.textPhone}>Enter your password</Text>

      <View style={styles.viewInput}>
        <TextInput
          placeholder="************"
          secureTextEntry={true}
          placeholderTextColor={colors.dark}
          style={styles.input}
        />
      </View>
      <View style={styles.viewGroupButton}>
        <RectButton style={styles.buttonStart} onPress={handleNavigateSuccess}>
          <Text style={styles.buttonStartText}>Continue</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}
