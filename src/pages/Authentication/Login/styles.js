import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 250,
    width: 250,
  },

  title: {
    color: colors.dark,
    fontSize: 19,
    fontWeight: "bold",
  },

  subTitle: {
    color: colors.dark,
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
  },

  buttonAccount: {
    backgroundColor: colors.blue,
    height: 50,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 100,
  },
  buttonAccountText: {
    fontSize: 15,
    color: colors.gray,
    fontWeight: "bold",
  },

  buttonLogin: {
    height: 50,
    width: "85%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonLoginText: {
    fontSize: 15,
    color: colors.blue,
    fontWeight: "bold",
  },
});

export default styles;
