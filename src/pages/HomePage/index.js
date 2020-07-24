import React from "react";
import { View, Text, SafeAreaView, Image } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import Icons from "@expo/vector-icons/MaterialCommunityIcons";
import IconF from "@expo/vector-icons/FontAwesome";
import { Octicons } from '@expo/vector-icons'; 
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import { colors } from "../../constants/colors";
import visa from "../../assets/visa.png";
import master from "../../assets/master.png";

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.viewHeaderTitle}>
          <Text style={styles.headerTitle}>$2,589.00</Text>
          <View style={styles.viewInfoNotUser}>
            <Icon
              name="notifications"
              color={colors.gray}
              size={25}
              style={styles.icon}
            />
            {/* <Text style={{color: '#fff', fontSize: 20, marginRight: 10}}>
              Sino

            </Text> */}
            <View style={styles.imageView} />
          </View>
        </View>
        <Text style={styles.textSubtitleHeader}>Available Balance</Text>

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.viewScroll}
        >
          <View style={styles.viewCards}>
            <View style={styles.viewCardHeader}>
              <Text style={styles.viewCardHeaderTitle}>Your Cards</Text>
              <Text style={styles.viewCardHeaderButton}>Add</Text>
            </View>
            <View style={styles.viewCardContent}>
              <View style={styles.viewContent}>
                <View style={styles.viewCardContentItem}>
                  <View style={styles.viewTypeImageCard}>
                    <Image source={visa} style={styles.imageVisa} />
                  </View>
                  <View style={styles.viewCardData}>
                    <View style={styles.viewCardDataHeader}>
                      <Text style={styles.viewCardDataText}>Visa Mater</Text>
                      <Text style={styles.textNumberCard}>** 7645</Text>
                    </View>
                    <View style={styles.viewValueCard}>
                      <Text style={styles.viewCardDataText}>$20000.00</Text>
                      <Text style={styles.textValueCardDate}>01/23</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.textValueCardDate} />
              </View>
              <View style={styles.viewContent}>
                <View style={styles.viewCardContentItem}>
                  <View style={styles.viewTypeImageCard}>
                    <Image source={master} style={styles.imageMaster} />
                  </View>
                  <View style={styles.viewCardData}>
                    <View style={styles.viewCardDataHeader}>
                      <Text style={styles.viewCardDataText}>Mastercard</Text>
                      <Text style={styles.textNumberCard}>** 4505</Text>
                    </View>
                    <View style={styles.viewValueCard}>
                      <Text style={styles.viewCardDataText}>$589.00</Text>
                      <Text style={styles.textValueCardDate}>01/22</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.viewCards}>
            <View style={styles.viewCardHeader}>
              <Text style={styles.viewCardHeaderTitle}>Deposits</Text>
              <Text style={styles.viewCardHeaderButton}>Add</Text>
            </View>
            <View style={styles.viewCardContentTwo}>
              <View style={styles.viewContent}>
                <View style={styles.viewCardContentItem}>
                  <View style={styles.viewTypeImageCard}>
                    <Icons name="bank" size={20} color={colors.blue} />
                  </View>
                  <View style={styles.viewCardData}>
                    <View style={styles.viewCardDataHeader}>
                      <Text style={styles.viewCardDataText}>For 5 years</Text>
                      <Text style={styles.textNumberCard}>22.05.2022</Text>
                    </View>
                    <View style={styles.viewValueCard}>
                      <Text style={styles.viewCardDataText}>$1524.00</Text>
                      <Text style={styles.textValueCardDate}>Rate 2%</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.viewLine} />
              </View>
              <View style={styles.viewContent}>
                <View style={styles.viewCardContentItem}>
                  <View style={styles.viewTypeImageCard}>
                    <Icons name="bank" size={20} color={colors.blue} />
                  </View>
                  <View style={styles.viewCardData}>
                    <View style={styles.viewCardDataHeader}>
                      <Text style={styles.viewCardDataText}>For 10 years</Text>
                      <Text style={styles.textNumberCardYear}>22.05.2022</Text>
                    </View>
                    <View style={styles.viewValueCard}>
                      <Text style={styles.viewCardDataText}>$10324.00</Text>
                      <Text style={styles.textValuePorcetange}>Rate 5%</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.viewLineTop} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
