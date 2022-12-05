import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import axios from "axios";

const CLIENT_ID = "ieqs47r6e9";
const CLIENT_KEY = "SWYZWyn7mEq7Qx4fhgGVSDw0IrO2x2Hm0YZsexNR";

// 임의로 사진 저장
const IMAGE = <Image source={require("../../assets/images/pose.jpg")} />;

export default function Api() {
  axios
    .post("https://naveropenapi.apigw.ntruss.com/vision-pose/v1/estimate", {
      headers: {
        "X-NCP-APIGW-API-KEY-ID": { CLIENT_ID },
        "X-NCP-APIGW-API-KEY": { CLIENT_KEY },
      },
      body: {
        Image: { IMAGE },
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// export default function App() {
//   const [info, setInfo] = useState([]);
//   const [pred, setPred] = useState([]);

//   let form = new FormData();
//   let data = {
//     uri: 'https://i0.wp.com/pixahive.com/wp-content/uploads/2021/03/A-boy-pose-on-road-365332-pixahive.jpg?fit=992%2C1488&ssl=1',
//     type: 'multipart/form-data',
//     name: 'single.jpg'
//   }
//   form.append('image', data);
//   const getPrediction = () => {
//     return fetch('https://naveropenapi.apigw.ntruss.com/vision-pose/v1/estimate', {
//       method: 'POST',
//       headers: {
//         'X-NCP-APIGW-API-KEY-ID': CLIENT_ID,
//         'X-NCP-APIGW-API-KEY': CLIENT_KEY,
//         'Content-Type': 'multipart/form-data'
//       },
//       body: {
//         image: data
//       }
//     }).then(response => response.json())
//       .then(json => console.log(json))
//       .catch((error) => console.error(error));
//   }
//   useEffect(() => {
//     getPrediction();
//   })
//   return (
//     <View style={styles.container}>
//       <Text>Offffpensdfsdf up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
