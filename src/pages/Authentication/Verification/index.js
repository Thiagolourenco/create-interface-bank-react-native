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

export default function Verification() {
  const navigation = useNavigation();

  function handleYourInformation() {
    navigation.navigate("YourInformation");
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

      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subTitle}>
        Enter 4 digit code we sent to +7827735525
      </Text>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="1"
          placeholderTextColor={colors.dark}
          style={styles.input}
        />
        <TextInput
          placeholder="6"
          placeholderTextColor={colors.dark}
          style={styles.input}
        />
        <TextInput
          placeholder="9"
          placeholderTextColor={colors.dark}
          style={styles.input}
        />
        <TextInput
          placeholder="7"
          placeholderTextColor={colors.white}
          style={[
            styles.input,
            { backgroundColor: colors.blue, color: colors.white },
          ]}
        />
      </View>
      <Text style={styles.textButtonPrivacy}>Reset code in 00:30</Text>
      <View style={styles.viewGroupButton}>
        <RectButton style={styles.buttonStart} onPress={handleYourInformation}>
          <Text style={styles.buttonStartText}>Continue</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  );
}
