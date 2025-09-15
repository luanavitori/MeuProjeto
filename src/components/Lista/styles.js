import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    paddingVertical: 8,
    height: 722,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
  },
  text: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: "#000",
    marginHorizontal: 10,
  },
});