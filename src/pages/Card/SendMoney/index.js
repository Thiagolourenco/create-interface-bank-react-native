import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

// ICONS
import { Ionicons } from "@expo/vector-icons";
import IconF from "@expo/vector-icons/FontAwesome";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "../../../constants/colors";
import homen from "../../../assets/homen.jpeg";
import mulher from "../../../assets/mulher.jpeg";

export default function SendMoney() {
  const data = [
    { id: 0, name: "Jessiaca", number: "+79277131856", img: mulher },
    { id: 1, name: "Ryan", number: "+79277131856", img: homen },
    { id: 2, name: "Grace", number: "+79277131856", img: mulher },
    3,
  ];
  const navigation = useNavigation();

  function handleSendMoney() {
    navigation.navigate("SendMoneyPersonal")
  }

  return (
    <View style={styles.contaienr}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnGoBack}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
        <Text style={styles.headerSubTitle}>Select options</Text>

        <View style={styles.viewAppFunctions}>
          <TouchableOpacity
            style={styles.viewCardIcon}
            activeOpacity={0.6}
            onPress={() => {}}
          >
            <View style={styles.viewIcon}>
              <AntDesign name="mobile1" size={24} color={colors.blue} />
              {/* <View style={{height: 20, width: 20, backgroundColor: '#222'}} /> */}
            </View>
            <Text style={styles.viewCardIconText}>Mobile</Text>
          </TouchableOpacity>

          <View style={[styles.viewCardIcon, { opacity: 0.5 }]}>
            <View style={styles.viewIcon}>
              <Fontisto name="wallet" size={24} color={colors.blue} />
            </View>
            <Text style={styles.viewCardIconText}>Bank</Text>
          </View>
          <View style={[styles.viewCardIcon, { opacity: 0.5 }]}>
            <View style={styles.viewIcon}>
              <MaterialCommunityIcons
                name="map-marker-radius"
                size={24}
                color={colors.blue}
              />
              {/* <View style={{height: 20, width: 20, backgroundColor: '#222'}} /> */}
            </View>
            <Text style={styles.viewCardIconText}>Nearby</Text>
          </View>
          <View style={[styles.viewCardIcon, { opacity: 0.5 }]}>
            <View style={styles.viewIcon}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={24}
                color={colors.blue}
              />
            </View>
            <Text style={styles.viewCardIconText}>QR Code</Text>
          </View>
        </View>
        <View style={styles.viewScroll}>
          <Text style={styles.viewScrollTitle}>Recent</Text>

          <View style={styles.dataRecentView}>
            <FlatList
              data={data}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.dataRecentViewContent}
                  activeOpacity={0.9}
                  onPress={handleSendMoney}
                >
                  <Image source={item.img} style={styles.imageViewList} />
                  <Text style={styles.dataRecentViewContentText}>
                    {item.name}
                  </Text>
                  <Text style={styles.dataRecentViewContentSubT}>
                    {item.number}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.viewContacts}>
            <Text style={styles.viewScrollTitle}>All contacts</Text>
            <View style={styles.viewSearch}>
              <Octicons name="search" size={20} color="#5E6276" />
              <TextInput
                placeholder="Search name or number"
                style={styles.input}
              />
            </View>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              style={{ marginTop: 10 }}
              renderItem={({ item }) => (
                <View style={styles.viewContactList}>
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={item.img}
                      style={styles.viewContactListImage}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={styles.viewContetListTitle}>
                        {item.name}
                      </Text>
                      <Text style={styles.viewContetListSub}>
                        {item.number}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.btnInvite}
                    activeOpacity={0.7}
                    onPress={() => {}}
                  >
                    <Text style={styles.btnInviteText}>Invite</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
