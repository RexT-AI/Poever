import {
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import { inputStyles } from "../components/Input";
import { buttonStyles, buttontextStyles } from "../components/Buttons";
import { imageStyles, viewStyles, checkstyles } from "../components/LoginStyle";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
      <Image
        source={require("../../assets/Header.png")}
        style={imageStyles.title}
      />
      <View>
        <TextInput
          style={inputStyles.LoginInput}
          placeholder="아이디 입력"
        ></TextInput>
        <TextInput
          style={inputStyles.LoginInput}
          placeholder="비밀번호 입력"
        ></TextInput>
      </View>

      <View style={checkstyles.checkboxcontainer}>
        <BouncyCheckbox
          style={checkstyles.checkbox}
          isChecked
          size={25}
          fillColor="#06ae7a"
          unfillColor="#FFFFFF"
          text="자동로그인"
          textStyle={{
            textDecorationLine: "none",
          }}
        />
      </View>

      <TouchableOpacity
        style={buttonStyles.longButton}
        onPress={() => navigation.navigate("POEVER")}
      >
        <Text style={buttontextStyles.longText}>로그인</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={buttonStyles.smallButton}
          onPress={() => navigation.navigate("아이디/비밀번호찾기")}
        >
          <Text style={buttontextStyles.smallText}>
            {" "}
            아이디 / 비밀번호 찾기 |
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={buttonStyles.smallButton}
          onPress={() => navigation.navigate("회원가입")}
        >
          <Text style={buttontextStyles.smallText}> 회원가입 </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
