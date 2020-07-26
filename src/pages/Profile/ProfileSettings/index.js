import React from "react";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import imageProfile from "../../../assets/photoPerfil.jpg";

export default function ProfileSettings() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewContentHeader}>
          <View style={styles.viewHeaderImage}>
            <Image source={imageProfile} style={styles.viewImage} />
          </View>
          <Text style={styles.viewHeaderText}> Thiago Lourenço </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.viewScroll}
        >
          <Text>s</Text>
        </ScrollView>
      </View>
    </View>
  );
}
