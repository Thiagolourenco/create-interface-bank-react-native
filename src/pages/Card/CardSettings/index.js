import React from "react";
import { View, Text } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import IconF from "@expo/vector-icons/FontAwesome";
import { Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import { colors } from "../../../constants/colors";

export default function CardSettigns() {
  return (
    <View style={styles.styles}>
      <View style={styles.header}>
        <View style={styles.viewHeaderTitle}>
          <Text style={styles.headerTitle}>Card Settings</Text>
        </View>
        <Text style={styles.textSubtitleHeader}>
          You can change quick links in setting
        </Text>

        <View style={styles.viewAppFunctions}>
          <View style={styles.viewCardIcon}>
            <View style={styles.viewIcon}>
              <IconF name="money" size={25} color={colors.blue} />

              {/* <View style={{height: 20, width: 20, backgroundColor: '#222'}} /> */}
            </View>
            <Text style={styles.viewCardIconText}>Send</Text>
          </View>

          <View style={styles.viewCardIcon}>
            <View style={styles.viewIcon}>
              <Octicons name="request-changes" size={24} color={colors.blue} />
            </View>
            <Text style={styles.viewCardIconText}>Request</Text>
          </View>
          <View style={styles.viewCardIcon}>
            <View style={styles.viewIcon}>
              <IconF name="history" size={25} color={colors.blue} />
              {/* <View style={{height: 20, width: 20, backgroundColor: '#222'}} /> */}
            </View>
            <Text style={styles.viewCardIconText}>History</Text>
          </View>
          <View style={styles.viewCardIcon}>
            <View style={styles.viewIcon}>
              <IconF name="exchange" size={25} color={colors.blue} />
            </View>
            <Text style={styles.viewCardIconText}>Change</Text>
          </View>
        </View>
        <View style={styles.viewScroll} />
      </View>
    </View>
  );
}
