import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import * as util from "./Logic.js"; // 로직 파트 불러오기
import Axios from "axios";

export default function Front() {
  const [pred, setPred] = useState([]);
  const localUrl = "ip주소:3000/pose";
  //ip주소: 현재 연결되어 있는 네트워크 속성 - IPv4 주소
  //port: 3000
  const axiosApi = async () => {
    try {
      Axios.get(localUrl).then((res) => {
        console.log(res.data); // api 결과
        setPred(res.data);
        console.log("pred", pred); // api 결과 중 'predictions' 값
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    axiosApi(); // pred에 api 결과 json 저장
  }, [pred]);
  console.log(util.getPose(pred)); // json을 인자로 넘겨줄 것
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
