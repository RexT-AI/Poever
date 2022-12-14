import React from "react";
import { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Platform, Image } from "react-native";
import { Camera } from "expo-camera"; //expo-camera import
import * as Permissions from "expo-permissions";
import * as util from "../components/Logic.js"; // 로직 불러오기
import Axios from "axios";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";
import AsyncStorage from "@react-native-async-storage/async-storage";
//import Standard from "../components/Standard";

export default class App extends React.Component {
  state = {
    hasPermission: null,
    cameraType: Camera.Constants.Type.back, //카메라 기본값은 후면 카메라
  };

  async componentDidMount() {
    this.getPermissionAsync();
  }

  //카메라 사용 허용 여부 요청
  getPermissionAsync = async () => {
    if (Platform.OS === "ios") {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("작업을 수행하기 위해서는 카메라 접근 권한이 필요합니다!");
      }
    }
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasPermission: status === "granted" });
  };

  //전면&후면 카메라 모드 변경
  handleCameraType = () => {
    const { cameraType } = this.state;
    this.setState({
      cameraType:
        cameraType === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back,
    });
  };

  //사진 찍는 함수
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }; //quality:0-1까지의 숫자, 1에 가까울수록 고화질, base64로 인코딩 하므로 true
      setInterval(async () => {
        let photo = await this.camera.takePictureAsync(options);
        this.setState(
          {
            photo: photo.base64, //base64로 인코딩
            scanning: true, //카메라를 보여줄지 안 보여줄지 [이거 false->true로 바꿨어요 사진 찍고 계속 켜져 있어야지 카메라에서 나가면 안되니까]
            uri: photo.uri,
          },
          () => this.savetoLocal(this.state.uri) //일단 갤러리에 저장하는거로 함
        );
      }, 2000);
    }
  };

  //찍은 사진을 갤러리에 저장
  savePhoto = async (uri) => {
    const ALBUM_NAME = "poeverPic";

    try {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

      if (status === "granted") {
        const asset = await MediaLibrary.createAssetAsync(uri);
        let album = await MediaLibrary.getAlbumAsync(ALBUM_NAME);

        if (album === null) {
          album = await MediaLibrary.createAlbumAsync(ALBUM_NAME, asset);
        } else {
          await MediaLibrary.addAssetsToAlbumAsync([asset], album.id);
        }
      } else {
        this.setState({ hasPermission: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
  };

  //찍은 사진을 로컬로 저장
  savetoLocal = async (uri) => {
    try {
      AsyncStorage.setItem("image", JSON.stringify(this.state.uri), () => {
        console.log("save image to local");
        //this.gotoAPI(uri);
      });
    } catch (error) {
      console.log(error);
    }
  };

  /*gotoAPI = async (uri) => {
    const [pred, setPred] = useState([]);
    const localUrl = "114.205.106.204:3000/pose";
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
  };*/

  //카메라 렌더
  render() {
    const { hasPermission } = this.state;
    if (hasPermission === null) {
      return <View />;
    } else if (hasPermission === false) {
      return <Text>카메라 접근 불가</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={(ref) => {
              this.camera = ref;
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => this.pickImage()}
              >
                <Ionicons
                  name="ios-photos"
                  style={{ color: "#fff", fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity //카메라 사진 찍는 버튼이 눌리는 event 발생 시
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                //사진 찍는 함수명 : takePicture()
                onPress={() => this.takePicture()}
              >
                <FontAwesome
                  name="camera"
                  style={{ color: "#fff", fontSize: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity //카메라 전면/후면 바꾸는 버튼이 눌리는 event 발생 시
                style={{
                  alignSelf: "flex-end",
                  alignItems: "center",
                  backgroundColor: "transparent",
                }}
                onPress={() => this.handleCameraType()}
              >
                <MaterialCommunityIcons
                  name="camera-switch"
                  style={{ color: "#fff", fontSize: 40 }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{ uri: this.state.uri }}
          />
        </View>
      );
    }
  }
}
