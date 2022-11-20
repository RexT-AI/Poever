import {
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import { imageStyles, viewStyles, textStyles } from "../components/MainStyle";
import { MainImages } from "../components/Images";

export default function MainScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
      <View style={viewStyles.profile}>
        <View
          style={{
            flexDirection: "row",
            paddingVertical: 30,
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("로그아웃")}>
            <View style={{ alignItems: "flex-start" }}>
              <Image source={MainImages.profile} style={imageStyles.profile} />
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: "flex-start" }}>
            <Text
              style={{
                fontSize: 26,
                color: "white",
                fontWeight: "700",
                paddingTop: 10,
                paddingLeft: 15,
              }}
            >
              랙스티님 안녕하세요!{" "}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                paddingTop: 10,
                paddingHorizontal: 15,
              }}
            >
              RexT@gmail.com{" "}
            </Text>
          </View>
        </View>
      </View>
      <View style={viewStyles.todaywalk}></View>
      <View style={viewStyles.lets}>
        <View style={viewStyles.greyline}>
          <Text
            style={{ fontSize: 20, alignSelf: "flex-start", color: "black" }}
          >
            {" "}
            바른 자세 진단하기{" "}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("체크하기")}>
          <View style={{ paddingTop: 25 }}>
            <Image source={MainImages.Header} style={imageStyles.title} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
