import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import logo from "../../../assets/3071357.jpg";

export default function Login() {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate("Registration");
  }

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Let's get started</Text>
      <Text style={styles.subTitle}>
        Never a better time than now to start thinking about how you manage alf
        your finances with ease
      </Text>
      <RectButton style={styles.buttonAccount} onPress={handleNavigate}>
        <Text style={styles.buttonAccountText}>Create account</Text>
      </RectButton>
      <RectButton style={styles.buttonLogin}>
        <Text style={styles.buttonLoginText}>Login to Account</Text>
      </RectButton>
    </View>
  );
}
