import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    color: colors.dark,
    fontWeight: "bold",
    marginLeft: 17,
    marginTop: 20,
    marginBottom: 10,
  },
  subTitle: {
    color: colors.dark,
    fontSize: 14,
    // marginRight: 10,
    marginLeft: 17,
    // marginTop: 12,
    // textAlign: 'center',
  },
  inputLabel: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 30,
    marginLeft: 17,
  },

  viewInput: {
    flexDirection: "row",
  },

  viewInputSelect: {
    borderRightColor: "#bdc3c7",
    borderRightWidth: 0.3,
    width: 50,
  },
  input: {
    // flex: 1,
    // width: '100%',
    color: colors.dark,
    marginLeft: 15,
    width: 50,
    padding: 5,
    paddingLeft: 20,
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.white,
    alignSelf: "center",
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    marginTop: 30,
    shadowColor: colors.dark,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    fontWeight: "bold",
  },
  textPhone: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 20,
    marginLeft: 17,
    fontWeight: "bold",
  },
  viewGroupButton: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonStart: {
    backgroundColor: colors.blue,
    height: 50,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // marginTop: 100,
    marginBottom: 10,
    // alignSelf: 'center',
  },
  buttonStartText: {
    fontSize: 15,
    color: colors.gray,
    fontWeight: "bold",
  },
  textBottom: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 10,
  },

  textButtonPrivacy: {
    fontSize: 12,
    color: colors.blue,
    // borderBottomWidth: 1,
    // borderBottomColor: colors.blue,
    marginLeft: 15,
    marginTop: 20,
    fontWeight: "bold",
  },
  btnGoBack: {
    marginTop: 30,
    marginLeft: 20,
  },
});

export default styles;
