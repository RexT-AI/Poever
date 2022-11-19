import { StyleSheet, Dimensions } from "react-native";
import { greaterThan } from "react-native-reanimated";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export const buttonStyles = StyleSheet.create({
  longButton: {
    alignItems: "center",
    justifyContent: "center",
    width: width - 80,
    height: 45,
    marginTop: 10,
    marginLeft: 3,
    paddingLeft: 15,
    paddingTop: 2,
    borderRadius: 20,
    backgroundColor: "#06ae7a",
    color: "#000000",
    borderWidth: 1,
    borderColor: "transparent",
  },
  smallButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 0,
    borderRadius: 4,
    elevation: 3,
  },
  halfButton: {
    height: 40,
    width: width * 0.45,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    elevation: 3,
    backgroundColor: "#006655",
  },
  findButton: {
    alignItems: "center",
    justifyContent: "center",
    width: width - 70,
    height: 45,
    marginTop: 10,
    marginLeft: 3,
    paddingLeft: 15,
    paddingTop: 2,
    borderRadius: 20,
    backgroundColor: "#06ae7a",
    color: "#000000",
    borderWidth: 1,
    borderColor: "transparent",
  },
});

export const buttontextStyles = StyleSheet.create({
  longText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    marginRight: 13,
  },
  smallText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  halfText: {
    fontSize: 20,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
});
