import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    backgroundColor: colors.dark,
    height: "100%",
    width: "100%",
  },
  headerTitle: {
    fontSize: 27,
    color: colors.white,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 10,
  },
  btnGoBack: {
    marginTop: 20,
    marginLeft: 20,
  },
  headerSubTitle: {
    fontSize: 14,
    color: colors.secondary,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
  viewContent: {
    backgroundColor: colors.gray,
    // flex: 1,
    paddingBottom: 20,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  viewContentTitel: {
    fontSize: 16,
    color: "#2C314B",
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
  },
  viewCheckConfirm: {
    height: 140,
    width: 130,
    borderRadius: 10,
    backgroundColor: "#EBEDF2",
    alignSelf: "center",
    marginTop: 30,
    shadowColor: "#ccc",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 0.4,
  },
  textValue: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#4073cc",
    alignSelf: "center",
    marginTop: 20,
  },
  textDescription: {
    fontSize: 12,
    marginTop: 10,
    color: "#ccc",
    alignSelf: "center",
  },
  viewFooterContent: {
    flex: 1,
    backgroundColor: "#fff",
  },
  viewContactList: {
    backgroundColor: "#F7F9Fc",
    height: 80,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#ccc",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 0.4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
  },
  viewContactListImage: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: "#eee",
  },
  viewContetListTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.dark,
  },
  viewContetListSub: {
    fontSize: 12,
    fontWeight: "600",
    color: "#8E93A0",
    marginTop: 4,
  },
  btnContinue: {
    height: 55,
    width: "90%",
    backgroundColor: "#4073CC",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    alignSelf: "center",
  },
  btnContinueText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
  },
});

export default styles;
