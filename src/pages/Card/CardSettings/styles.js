import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    // flex: 1,
    backgroundColor: colors.dark,
    height: "100%",
    width: "100%",
  },
  viewHeaderTitle: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 35,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 27,
    color: colors.white,
    fontWeight: "700",
    marginLeft: 10,
  },
  viewInfoNotUser: {
    flexDirection: "row",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
    transform: [{ rotate: "15deg" }],
  },
  imageView: {
    height: 30,
    width: 30,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  textSubtitleHeader: {
    fontSize: 11,
    color: "rgba(255,255,255,0.5)",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
  viewAppFunctions: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-evenly",
  },
  viewCardIcon: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  viewIcon: {
    height: 45,
    width: 45,
    borderRadius: 10,
    backgroundColor: colors.white,
    // marginLeft: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  viewCardIconText: {
    color: "rgba(255,255,255,0.5)",
    fontWeight: "bold",
    // marginLeft: 25,
    fontSize: 11,
    marginTop: 10,
  },
  viewScroll: {
    backgroundColor: colors.gray,
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});

export default styles;
