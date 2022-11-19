import react from 'react';
import { StyleSheet,TextInput,Dimensions } from "react-native";
const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const inputStyles=StyleSheet.create({
  LoginInput:{
      alignSelf:'center',
      fontSize:15,
      width:width-80,
      height:60,
      marginTop:10,
      marginLeft:3,
      paddingLeft:15,
      paddingTop:2,
      borderRadius:5,
      backgroundColor:'#FFFFFF',
      color:'#696969',
      borderWidth:1,
      borderColor:'#696969',
  },
  MakeAccountInput:{
    alignSelf:'center',
    fontSize:15,
    width:width-80,
    height:40,
    marginTop:10,
    marginLeft:3,
    paddingLeft:15,
    paddingTop:2,
    borderRadius:5,
    backgroundColor:'#FFFFFF',
    color:'#696969',
    borderWidth:1,
    borderColor:'#696969',
},
});
