import { Text, Image, View } from "react-native";

export default Standard = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../../assets/Standard.png")}
      />
    </View>
  );
};
