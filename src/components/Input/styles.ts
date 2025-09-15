import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50
  },
  button: {
    backgroundColor: "black",
    marginLeft: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});