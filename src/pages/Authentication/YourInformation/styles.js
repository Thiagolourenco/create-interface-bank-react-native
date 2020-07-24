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
    fontSize: 19,
    color: colors.dark,
    fontWeight: "bold",
    marginLeft: 17,
    marginTop: 10,
  },
  subTitle: {
    color: colors.dark,
    fontSize: 15,
    marginRight: 10,
    marginLeft: 17,
    marginTop: 10,
    // textAlign: 'center',
  },
  inputLabel: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 30,
    marginLeft: 17,
  },

  viewInput: {
    height: 45,
    width: "90%",
    padding: 5,
    borderRadius: 5,
    backgroundColor: colors.white,
    alignSelf: "center",
    shadowOffset: {
      height: 0.5,
      width: 0.5,
    },
    marginTop: 15,
    shadowColor: colors.dark,
    shadowOpacity: 0.4,
    shadowRadius: 3,
    flexDirection: "row",
  },

  viewInputSelect: {
    borderRightColor: "#bdc3c7",
    borderRightWidth: 0.3,
    width: 50,
  },
  input: {
    flex: 1,
    width: "100%",
    color: colors.dark,
    marginLeft: 10,
  },
  textPhone: {
    fontSize: 12,
    color: colors.dark,
    marginTop: 20,
    marginLeft: 17,
  },
  viewGroupButton: {
    bottom: 0,
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  buttonStart: {
    backgroundColor: colors.blue,
    height: 50,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 100,
    // alignSelf: 'center',
  },
  buttonStartText: {
    fontSize: 15,
    color: colors.gray,
  },
});

export default styles;
