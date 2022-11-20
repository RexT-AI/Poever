import { StyleSheet,Dimensions } from "react-native";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const viewStyles=StyleSheet.create({
    whole:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
    },
    todaywalk:{
        flexDirection:"row",
        backgroundColor:'#2d8969',
        width:width,
        justifyContent:'center',
        height:40,
        paddingVertical:10,
        paddingHorizontal:10,        
    },
    profile:{
        backgroundColor:'#06ae7a',
        width:width,
        height:height-720,
        alignItems:'center',
        justifyContent:'center',
    },
    lets:{
        height:'60%',
        alignItems:'center',
        paddingVertical:30,
    },
    greyline:{
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 2,
        width:width-30,
        paddingVertical:10,
    }
});

export const imageStyles=StyleSheet.create({
    title:{
        alignSelf:'center',
        height:120,
        width:width-30,
    },
    box:{
        alignSelf:'center',
        height:width*0.07,
        width:width*0.07,
    },
    profile:{
        alignSelf:'center',
        height:70,
        width:70,
    }
});

export const textStyles=StyleSheet.create({
    title:{
        fontSize:35,
        alignSelf:'center',
        justifyContent:'center',
        color:'white',
        fontWeight: 'bold',
        paddingTop:30,
        paddingBottom:10,        
    },
    subtitle:{
        fontSize:26,
        color:'white',
        fontWeight:'bold'
    },
    emailtext:{
        fontSize:15,
        color:'white',
    },
    halfText:{
        width:width*0.4,
        textAlign:'center',
        color:'white',
        fontSize:20,
    },
})
