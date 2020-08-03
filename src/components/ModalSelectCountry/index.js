import React, { useState, useEffect } from "react";
import { View, Text, Modal, FlatList, TouchableOpacity } from "react-native";
import axios from "axios";
import { SvgUri } from "react-native-svg";
import { ScrollView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

import { colors } from "../../constants/colors";

export default function ModalSelectCountry({ visible, onRequestClose }) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    async function loadCountry() {
      await axios
        .get("https://restcountries.eu/rest/v2/all")
        .then((res) => {
          let countrys = res.data.map((item, index) => {
            return { value: item };
          });
          console.log("COUNTY", countrys.name);
          setCountry(countrys);
        })
        .catch((err) => console.log("ERROR", err));
    }

    loadCountry();
  }, []);

  return (
    <Modal
      visible={visible}
      onRequestClose={() => onRequestClose()}
      transparent={true}
    >
      <View style={{ flex: 1, backgroundColor: "#fff", paddingLeft: 20 }}>
        <TouchableOpacity
          style={{ margin: 10 }}
          onPress={() => onRequestClose()}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <ScrollView>
          {country.map((item) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
                backgroundColor: colors.gray,
                height: 50,
                paddingLeft: 10,
                borderRadius: 10,
              }}
            >
              <SvgUri width="40" height="40" uri={item.value.flag} />
              <Text
                style={{
                  fontSize: 16,
                  color: "#000",
                  fontWeight: "bold",
                  marginLeft: 10,
                }}
              >
                {item.value.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Modal>
  );
}
