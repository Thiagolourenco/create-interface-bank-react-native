import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Slider from "@react-native-community/slider";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../../../constants/colors";
import styles from "./styles";
import imageLogoCard from "../../../assets/visa.png";

export default function SendMoneyPersonal() {
  const [sliderState, setSliderState] = useState([100, 200, 300, 450, 500]);
  const [dataValor, setDataValor] = useState([
    {
      id: 0,
      value: 100,
    },
    {
      id: 1,
      value: 200,
    },
    {
      id: 3,
      value: 300,
    },
    {
      id: 4,
      value: 450,
    },
    {
      id: 5,
      value: 500,
    },
  ]);
  const [sliderChange, setSliderChange] = useState(0);

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
          <Text style={styles.viewContentTitle}>Transfer amount</Text>
          <View style={styles.viewValueAmount}>
            <TouchableOpacity activeOpacity={0.8} style={styles.viewValueBtn}>
              <AntDesign name="minus" size={20} color="#AAADB8" />
            </TouchableOpacity>
            <Text style={styles.textValue}>${sliderChange}</Text>
            <TouchableOpacity style={styles.viewValueBtn} activeOpacity={0.8}>
              <AntDesign name="plus" size={20} color="#AAADB8" />
            </TouchableOpacity>
          </View>

          <Slider
            style={styles.slider}
            value={0}
            onValueChange={(value) => console.log("VALUE --> ", value)}
            minimumValue={100}
            maximumValue={500}
            minimumTrackTintColor={colors.blue}
            maximumTrackTintColor="#AAADB8"
            thumbTintColor="#4073cc"
            onSlidingStart={(event) => setSliderChange(event)}
          />

          <ScrollView
            style={styles.btnValoresView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {dataValor.map((item) => (
              <TouchableOpacity style={styles.btnValor} activeOpacity={0.7}>
                <Text style={styles.btnValorText}>${item.value}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.viewSelectAccount}>
            <Text style={styles.viewContentTitle}>Select your account</Text>

            <TouchableOpacity style={styles.btnSelectCard} activeOpacity={0.7}>
              <View style={styles.viewRow}>
                <View style={styles.viewImageVisa}>
                  <Image style={styles.imgCard} source={imageLogoCard} />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.viewCardDataText}>Visa Master</Text>
                  <Text style={styles.textNumberCard}>** 7545</Text>
                </View>
              </View>
              <View>
                <Text style={styles.viewCardDataText}>$2000.00</Text>
                <Text style={styles.textNumberCard}>01/23</Text>
              </View>
            </TouchableOpacity>

            <View
              style={styles.groupBtn}
            >
              <TouchableOpacity style={styles.btnCancel} activeOpacity={0.7}>
                <Text style={[styles.btnText, { color: "#8E93A0" }]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSend} activeOpacity={0.7} onPress={() => navigation.navigate("Congrats")}>
                <Text style={[styles.btnText, { color: colors.white }]}>
                  Send
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
