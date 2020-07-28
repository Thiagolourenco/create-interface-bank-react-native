import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "../../../constants/colors";
import homen from "../../../assets/homen.jpeg";

export default function Congrats() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnGoBack}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
        <Text style={styles.headerSubTitle}>How much would like to send?</Text>

        <View style={styles.viewContent}>
          <Text style={styles.viewContentTitel}>Transfer detail</Text>
          <View style={styles.viewCheckConfirm} />
          <Text style={styles.textValue}>$850</Text>
          <Text style={styles.textDescription}>
            * note that the transfer might take up to 3 days.
          </Text>
        </View>
        <View style={styles.viewFooterContent}>
          <Text style={styles.viewContentTitel}> Recipient</Text>

          <View style={styles.viewContactList}>
            <View style={{ flexDirection: "row" }}>
              <Image source={homen} style={styles.viewContactListImage} />
              <View style={{ marginLeft: 10 }}>
                <Text style={styles.viewContetListTitle}>Ryan Khula</Text>
                <Text style={styles.viewContetListSub}>+792776556565</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.btnContinue} activeOpacity={0.8}>
            <Text style={styles.btnContinueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
