import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// ICONS
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import styles from "./styles";
import imageProfile from "../../../assets/photoPerfil.jpg";
import { colors } from "../../../constants/colors";

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
          <Text style={styles.titleHeader}>Profile settings</Text>
          <View style={styles.viewContent}>
            <View style={styles.viewContentView}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ flexDirection: "row" }}
              >
                <View style={styles.icon}>
                  <EvilIcons name="user" size={30} color={colors.blue} />
                </View>
                <View style={styles.viewContentValue}>
                  <Text style={styles.viewContentValueText}>Change name</Text>
                  <Text style={styles.viewContentValueTextSub}>
                    Change your first and last name
                  </Text>
                </View>
              </TouchableOpacity>
              <Ionicons name="ios-arrow-forward" size={18} color="#585F72" />
            </View>
            <View style={styles.lineView} />
            <View style={styles.viewContentView}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ flexDirection: "row" }}
              >
                <View style={styles.icon}>
                  <Foundation
                    name="telephone-accessible"
                    size={24}
                    color={colors.blue}
                  />
                </View>
                <View style={styles.viewContentValue}>
                  <Text style={styles.viewContentValueText}>Change phone</Text>
                  <Text style={styles.viewContentValueTextSub}>
                    You can change your phone
                  </Text>
                </View>
              </TouchableOpacity>
              <Ionicons name="ios-arrow-forward" size={18} color="#585F72" />
            </View>
            <View style={styles.lineView} />
            <View style={styles.viewContentView}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ flexDirection: "row" }}
              >
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="email-check"
                    size={22}
                    color={colors.blue}
                  />
                </View>
                <View style={styles.viewContentValue}>
                  <Text style={styles.viewContentValueText}>Change email</Text>
                  <Text style={styles.viewContentValueTextSub}>
                    You can change your email
                  </Text>
                </View>
              </TouchableOpacity>
              <Ionicons name="ios-arrow-forward" size={18} color="#585F72" />
            </View>
            <View style={styles.lineView} />
            <View style={styles.viewContentView}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ flexDirection: "row" }}
              >
                <View style={styles.icon}>
                  <Entypo name="language" size={22} color={colors.blue} />
                </View>
                <View style={styles.viewContentValue}>
                  <Text style={styles.viewContentValueText}>
                    Change language
                  </Text>
                  <Text style={styles.viewContentValueTextSub}>
                    You can change the language
                  </Text>
                </View>
              </TouchableOpacity>
              <Ionicons name="ios-arrow-forward" size={18} color="#585F72" />
            </View>
          </View>
          <Text style={styles.titleHeaderSettings}>Secure settings</Text>
          <View style={styles.viewContent}>
            <View style={styles.viewContentView}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ flexDirection: "row" }}
              >
                <View style={styles.icon}>
                  <MaterialCommunityIcons
                    name="textbox-password"
                    size={24}
                    color={colors.blue}
                  />
                </View>
                <View style={styles.viewContentValue}>
                  <Text style={styles.viewContentValueText}>
                    Change password
                  </Text>
                  <Text style={styles.viewContentValueTextSub}>
                    You can change the language
                  </Text>
                </View>
              </TouchableOpacity>
              <Ionicons name="ios-arrow-forward" size={18} color="#585F72" />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
