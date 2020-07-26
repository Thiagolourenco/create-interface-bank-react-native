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
  viewContentHeader: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  viewHeaderImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  viewImage: {
    flex: 1,
    backgroundColor: "#ccc",
    borderRadius: 70,
    height: 92,
    width: 92,
  },
  viewHeaderText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
    marginTop: 16,
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
