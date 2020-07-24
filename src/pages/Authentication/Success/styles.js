import { StyleSheet } from "react-native";

import { colors } from "../../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    color: colors.dark,
    fontWeight: "bold",
    // marginLeft: 17,
    // marginTop: 10,
  },
  subTitle: {
    color: colors.dark,
    fontSize: 15,
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    alignSelf: "center",
    textAlign: "center",
    // textAlign: 'center',
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
    fontWeight: "bold"
  },
});

export default styles;
