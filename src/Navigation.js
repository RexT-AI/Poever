import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";
import LoginScreen from "./screens/LoginScreen";
import Findid from "./screens/Findid";
import MakeAccountScreen from "./screens/MakeAccount";
import MainScreen from "./screens/MainScreen";
import CheckingScreen from "./screens/CheckingScreen";

const Tab = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: { height: 100, backgroundColor: "#06ae7a" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          headerLeftLabelVisible: false,
        }}
      >
        <Tab.Screen
          name="로그인"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="회원가입"
          component={MakeAccountScreen}
          options={{ title: "회원가입" }}
        />
        <Tab.Screen
          name="아이디/비밀번호찾기"
          component={Findid}
          options={{ title: "아이디/비밀번호 찾기" }}
        />
        <Tab.Screen
          name="POEVER"
          component={MainScreen}
          options={({ navigation }) => ({
            title: "POEVER",
            headerRight: () => (
              <Icon
                name="home"
                style={{ marginRight: 11 }}
                size={28}
                color="#ffffff"
                onPress={() => navigation.navigate("POEVER")}
              />
            ),
          })}
        />
        <Tab.Screen
          name="체크하기"
          component={CheckingScreen}
          options={({ navigation }) => ({
            title: "체크하기",
            headerRight: () => (
              <Icon
                name="home"
                style={{ marginRight: 11 }}
                size={28}
                color="#ffffff"
                onPress={() => navigation.navigate("POEVER")}
              />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
