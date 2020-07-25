import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    color: colors.dark,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    color: "rgba(192,192,192, 1)",
  },
  btnGroup: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
  },
  btn: {
    height: 30,
    backgroundColor: "transparent",
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 10,

    shadowColor: "#eee",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "700",
  },
  viewScroll: {
    marginTop: 20,
  },
  viewCard: {
    height: 170,
    width: 290,
    backgroundColor: colors.dark,
    // alignSelf: "center",
    borderRadius: 15,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-evenly",
  },

  viewBollon: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
  },
  cardSettings: {
    flex: 1,
    marginTop: 15,
    // marginLeft: 20,
  },
  cardSettingsTitle: {
    fontSize: 22,
    color: colors.dark,
    fontWeight: "bold",
    marginLeft: 20,
  },
  cardSettingsView: {
    height: 70,
    width: "90%",
    flexDirection: "row",
    // width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "rgba(255,255,255,0.5)",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    paddingLeft: 10,
  },
  cardSettingsViewText: {
    fontSize: 18,
    marginLeft: 10,
    color: colors.dark,
    fontWeight: "600",
  },
  contentCard: { flexDirection: "row" },
  viewCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
  },
  viewCardValue: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  viewCardType: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "800",
  },
  viewCardNumber: {
    flexDirection: "row",
    marginLeft: 10,
  },
  viewCardNumberText: {
    fontSize: 16,
    color: colors.white,
    fontWeight: "bold",
    marginLeft: 10,
  },
  viewCardFooter: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  viewCardFooterName: {},
  viewCardFooterNameText: {
    fontSize: 12,
    color: "rgba(255,255,255,0.5)",
    fontWeight: "bold",
  },
  viewCardFooterNameTextValue: {
    fontSize: 10,
    color: colors.white,
    fontWeight: "bold",
  },
  viewCardFooterNameUser: {
    marginRight: 40,
  },
});

export default styles;
