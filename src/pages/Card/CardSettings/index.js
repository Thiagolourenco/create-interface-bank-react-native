import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import IconF from "@expo/vector-icons/FontAwesome";
import { Octicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Animated, { multiply, divide } from "react-native-reanimated";
import { useScrollHandler } from "react-native-redash";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// ICONS
import Icons from "@expo/vector-icons/MaterialCommunityIcons";

import styles from "./styles";
import { colors } from "../../../constants/colors";
import visaLogo from "../../../assets/simbolos.png";
import BollonScroll from "../../../components/BollonScroll";

export default function CardSettigns() {
  const navigation = useNavigation();
  const data = [0, 1, 2];
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();

  function sendMoney() {
    navigation.navigate("SendMoney");
  }

  return (
    <View style={styles.styles}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnGoBack}
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-arrow-back" size={24} color={colors.white} />
        </TouchableOpacity>
        <View style={styles.viewHeaderTitle}>
          <Text style={styles.headerTitle}>Card Settings</Text>
        </View>
        <Text style={styles.textSubtitleHeader}>
          You can change quick links in setting
        </Text>

        <View style={styles.viewAppFunctions}>
          <TouchableOpacity
            style={styles.viewCardIcon}
            activeOpacity={0.6}
            onPress={sendMoney}
          >
            <View style={styles.viewIcon}>
              <IconF name="money" size={25} color={colors.blue} />

              {/* <View style={{height: 20, width: 20, backgroundColor: '#222'}} /> */}
            </View>
            <Text style={styles.viewCardIconText}>Send</Text>
          </TouchableOpacity>

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

        <View style={styles.viewScroll}>
          <View style={styles.viewCardHeader}>
            <Text style={styles.viewCardHeaderTitle}>All Cards</Text>
            <Text style={styles.viewCardHeaderButton}>Add</Text>
          </View>

          <Animated.ScrollView
            ref={scroll}
            style={styles.viewScrollView}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            {...scrollHandler}
          >
            {data.map((item) => (
              <View style={styles.viewCard} key={item}>
                <View style={styles.viewCardHeaderT}>
                  <Text style={styles.viewCardValue}>$2000.00</Text>
                  <Image source={visaLogo} style={{ height: 40, width: 40 }} />
                </View>
                <View style={styles.viewCardNumber}>
                  <Text style={styles.viewCardNumberText}>****</Text>
                  <Text style={styles.viewCardNumberText}>****</Text>
                  <Text style={styles.viewCardNumberText}>****</Text>

                  <Text style={styles.viewCardNumberText}>1222</Text>
                </View>
                <View style={styles.viewCardFooter}>
                  <View style={styles.viewCardFooterNameUser}>
                    <Text style={styles.viewCardFooterNameText}>
                      CARD HOLDER
                    </Text>
                    <Text style={styles.viewCardFooterNameTextValue}>
                      THIAGO L. S. SILVA
                    </Text>
                  </View>
                  <View style={styles.viewCardFooterName}>
                    <Text style={styles.viewCardFooterNameText}>EXPIRES</Text>
                    <Text style={styles.viewCardFooterNameTextValue}>
                      02/22
                    </Text>
                  </View>
                  <View style={styles.viewCardFooterName}>
                    <Text style={styles.viewCardFooterNameText}>CVV</Text>
                    <Text style={styles.viewCardFooterNameTextValue}>274</Text>
                  </View>
                </View>
              </View>
            ))}
          </Animated.ScrollView>
          <View style={styles.viewBollon}>
            {data.map((item) => (
              <BollonScroll />
            ))}
          </View>

          <View style={styles.viewCardHeaderTrans}>
            <Text style={styles.viewCardHeaderTitle}>Recent Transactions</Text>
            <Text style={styles.viewCardHeaderButton}>Add</Text>
          </View>
          <View style={styles.viewCardTransactions}>
            <View style={styles.viewCardTransactionsContent}>
              <View style={styles.viewCardTransactionsContentBody}>
                <View style={styles.viewTypeImageCard}>
                  <Icons name="bank" size={26} color={colors.blue} />
                </View>
                <View style={styles.viewCardTransactionsDesc}>
                  <Text style={styles.viewCardDataText}>Transport</Text>
                  <Text style={styles.textNumberCardYear}>UBER Pool</Text>
                </View>
              </View>
              <View style={styles.viewCardTransactionsDesc}>
                <Text style={styles.viewCardDataText}>-$10.00</Text>
                <Text style={styles.textNumberCardYearDate}>Aug 25</Text>
              </View>
            </View>
            <View style={styles.viewLineTransactions} />
            <View style={styles.viewCardTransactionsContent}>
              <View style={styles.viewCardTransactionsContentBody}>
                <View style={styles.viewTypeImageCard}>
                  <Icons name="bank" size={26} color={colors.blue} />
                </View>
                <View style={styles.viewCardTransactionsDesc}>
                  <Text style={styles.viewCardDataText}>Payment</Text>
                  <Text style={styles.textNumberCardYear}>
                    Payment from Ryan
                  </Text>
                </View>
              </View>
              <View style={styles.viewCardTransactionsDesc}>
                <Text style={[styles.viewCardDataText, { color: "#2ecc71" }]}>
                  +$124.00
                </Text>
                <Text style={styles.textNumberCardYearDate}>Aug 25</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
