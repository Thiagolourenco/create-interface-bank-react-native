import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { Feather } from "@expo/vector-icons";
import Modal from "react-native-modal";
import Slider from "@react-native-community/slider";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import LocationContext from "../../../context/location";
import photoImage from "../../../assets/photoPerfil.jpg";
import { colors } from "../../../constants/colors";

const API_KEY = "AIzaSyB10ckbaNIgyHTxXEYD4gKqFIKmctcpuAk";

export default function MapPage() {
  const [location, setLocation] = useState([]);
  const { location: locations } = useContext(LocationContext);
  const [modal, setModal] = useState(false);
  const data = [
    { id: 1, m: "100" },
    { id: 2, m: "200" },
    { id: 3, m: "300" },
    { id: 4, m: "400" },
    { id: 5, m: "500" },
  ];
  const [sliderChange, setSliderChange] = useState(0);

  useEffect(() => {
    function getPlaces() {
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locations.latitude},${locations.longitude}&radius=50000&type=atm&key=${API_KEY}`;
      // const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=${API_KEY}`;
      const markers = [];
      fetch(url)
        .then((res) => res.json())
        .then((res) => {
          res.results.map((item, index) => {
            const marketObj = {};

            marketObj.id = item.id;
            marketObj.name = item.name;
            marketObj.photos = item.photos;
            marketObj.rating = item.rating;
            marketObj.vicinity = item.vicinity;
            marketObj.marker = {
              latitude: item.geometry.location.lat,
              longitude: item.geometry.location.lng,
            };

            markers.push(marketObj);
          });

          setLocation(markers);
        })
        .catch((err) => console.log("ERROR => ", err));
    }

    getPlaces();
  }, []);

  function handleModalRadius() {
    setModal(true);
  }

  function handleModalClose() {
    setModal(false);
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: locations.latitude,
          longitude: locations.longitude,
          latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
        }}
        initialRegion={{
          latitude: locations.latitude,
          longitude: locations.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          // latitudeDelta: locations.latitude,
          // longitudeDelta: locations.longitude,
        }}
      >
        <Marker
          draggable
          coordinate={{
            latitude: locations.latitude,
            longitude: locations.longitude,
          }}
          title="Minha Location"
        >
          <View style={styles.makerCustomView}>
            <Image source={photoImage} style={styles.makerCustomImage} />
          </View>
        </Marker>

        {location.map((marker, i) => (
          <Marker
            key={i}
            coordinate={{
              latitude: marker.marker.latitude,
              longitude: marker.marker.longitude,
            }}
            title={marker.name}
          >
            <View style={styles.makerCustomViewType} />
          </Marker>
        ))}
      </MapView>

      <Text style={styles.titleMap}>Related Nearby</Text>
      <View style={styles.viewContentAtm}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {location.map((item) => (
            <TouchableOpacity
              style={styles.viewImageContent}
              activeOpacity={0.7}
              onPress={handleModalRadius}
            >
              <Feather name="map-pin" size={24} color={colors.dark} />
              <View style={styles.viewColumn}>
                <Text style={styles.viewContentAtmText}>{item.name}</Text>
                <Text style={styles.viewContentAtmDesc}>500 metros</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <Modal
        testID="modal"
        isVisible={modal}
        onSwipeComplete={() => handleModalClose()}
        swipeDirection={["down"]}
        style={{ justifyContent: "center", margin: 0 }}
      >
        <View style={styles.viewModal}>
          <View style={styles.viewLine} />
          <Text style={styles.viewModalTitle}>Change account</Text>

          <View style={styles.viewValueAmount}>
            <TouchableOpacity activeOpacity={0.8} style={styles.viewValueBtn}>
              <AntDesign name="minus" size={20} color="#AAADB8" />
            </TouchableOpacity>
            <Text style={styles.textValue}>{sliderChange}m</Text>
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
            {data.map((item) => (
              <TouchableOpacity style={styles.btnValor} activeOpacity={0.7}>
                <Text style={styles.btnValorText}>{item.m}m</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.groupBtn}>
            <TouchableOpacity style={styles.btnCancel} activeOpacity={0.7}>
              <Text style={[styles.btnText, { color: "#8E93A0" }]}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSend}
              activeOpacity={0.7}
              onPress={() => navigation.navigate("Congrats")}
            >
              <Text style={[styles.btnText, { color: colors.white }]}>
                Accept
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
