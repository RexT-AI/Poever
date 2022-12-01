import { Text, Image, View } from "react-native";

export default Standard = () => {

let res = new Array(4).fill(false);
res = utility.getpose(pred);

if (res = [0,0,0,0]) { //default

  return(    
  <View style={{ alignItems: "center" }}>
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require("../../assets/default_box.png")}
    />
  </View>);

} else if (res == [0,0,0,1] || res == [0,0,1,0] || res == [0,0,1,1]) { //leg

  return(    
  <View style={{ alignItems: "center" }}>
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require("../../assets/leg_box.png")}
    />
  </View>);

} else if (res == [0,1,0,0]) { //spine

  return(    
  <View style={{ alignItems: "center" }}>
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require("../../assets/spine_box.png")}
    />
  </View>);

} else if (res == [0,1,0,1] || res == [0,1,1,0] || res == [0,1,1,1]) { //spine_leg

  return(    
  <View style={{ alignItems: "center" }}>
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require("../../assets/spine_leg_box.png")}
    />
  </View>);

} else if (res == [1,0,0,0]) { //head

  return(    
  <View style={{ alignItems: "center" }}>
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require("../../assets/head_box.png")}
    />
  </View>);

} else if (res == [1,0,0,1] || res == [1,0,1,0] || res == [1,0,1,1]) { //head_leg

  return(    
  <View style={{ alignItems: "center" }}>
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require("../../assets/head_leg_box.png")}
    />
  </View>);

} else if (res == [1,1,0,0]) { //head_spine

  return(    
  <View style={{ alignItems: "center" }}>
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require("../../assets/head_spine_box.png")}
    />
  </View>);

} else if (res == [1,1,0,1] || res == [1,1,1,0] || res == [1,1,1,1]) { //all

  return(    
  <View style={{ alignItems: "center" }}>
    <Image
      style={{
        width: 200,
        height: 200,
      }}
      source={require("../../assets/all_box.png")}
    />
  </View>);

} else {
  return(    
    <View style={{ alignItems: "center" }}>
      <Image
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../../assets/default_box.png")}
      />
    </View>);

}

};
