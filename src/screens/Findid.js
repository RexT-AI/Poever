import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { inputStyles } from "../components/Input";
import { buttonStyles, buttontextStyles } from "../components/Buttons";
import { viewStyles, textStyles } from "../components/MakeAccountStyle";

export default function MakeAccountScreen({ navigation }) {
  return (
    <SafeAreaView style={viewStyles.whole}>
      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>아이디 찾기</Text>
        <View style={viewStyles.contents}>
          <TextInput style={inputStyles.MakeAccountInput} placeholder="이름" />
          <TextInput
            style={inputStyles.MakeAccountInput}
            placeholder="이메일 주소"
          />
          <View style={{ marginTop: 20, alignSelf: "center" }}>
            <TouchableOpacity style={buttonStyles.findButton}>
              <Text style={buttontextStyles.longText}>인증번호 요청하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ paddingVertical: 3 }}></View>

      <View style={viewStyles.contentscontainer}>
        <Text style={textStyles.title2}>비밀번호 찾기</Text>
        <View style={viewStyles.contents}>
          <TextInput style={inputStyles.MakeAccountInput} placeholder="이름" />
          <TextInput
            style={inputStyles.MakeAccountInput}
            placeholder="이메일 주소"
          />
          <View style={{ marginTop: 20, alignSelf: "center" }}>
            <TouchableOpacity style={buttonStyles.findButton}>
              <Text style={buttontextStyles.longText}>
                비밀번호 변경 이메일 보내기
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
