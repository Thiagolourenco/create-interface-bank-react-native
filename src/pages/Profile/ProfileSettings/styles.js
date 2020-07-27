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
    marginTop: 40,
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
  titleHeader: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  viewContent: {
    height: 320,
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#212121",
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: 0.5,
  },
  viewContentView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: "#F6F7F9",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  viewContentValue: {
    marginLeft: 10,
    marginTop: 5,
  },
  viewContentValueText: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.dark,
  },
  viewContentValueTextSub: {
    fontSize: 12,
    color: "#838796",
    marginTop: 5,
  },
  lineView: {
    borderBottomWidth: 1,
    borderBottomColor: "#f6f6f6",
    width: "75%",
    marginTop: 10,
    marginBottom: 5,
    alignSelf: "flex-end",
  },
  titleHeaderSettings: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
});

export default styles;
