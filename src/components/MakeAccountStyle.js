import { StyleSheet,Dimensions } from "react-native";

const width=Dimensions.get('window').width;
const height=Dimensions.get('window').height;

export const viewStyles=StyleSheet.create({
    whole:{
        flex:1,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    checkone:{
        flexDirection:"row",
        backgroundColor:'white',
        width:width,
        justifyContent:'flex-start',
        paddingLeft:30,
        alignItems:'center',
        height:40,
    },
    checkall:{
        flexDirection:"row",
        backgroundColor:'white',
        width:width,
        justifyContent:'flex-start',
        paddingLeft:30,
        alignItems:'center',
        height:40,
    },
    contents:{
        paddingVertical:20,
    },
    contentscontainer:{
        height:280,
        width:width,
        backgroundColor:'white',
    },
    itemcontainer:{
        height:120,
        width:width,
        alignItems:'center',
        paddingVertical:10,
        backgroundColor:'white',
        marginBottom:-40,
    },
    titlecontainer:{
        height:80,
        width:width,
        paddingVertical:10,
        backgroundColor:'#06ae7a',
        justifyContent:'center',
        marginTop:-15
    },
    agreeline:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:width-50,
        paddingTop:2,
        margin:10,
        alignSelf:'center',
    },
    findtitlecontainer:{
        height:70,
        width:width,
        paddingVertical:10,
        backgroundColor:'#06ae7a',
        justifyContent:'center',
        marginTop:-65,
        marginBottom:20,
    },
    
});

export const imageStyles=StyleSheet.create({
    box:{
        alignSelf:'center',
        height:width*0.07,
        width:width*0.07,
    },
});

export const textStyles=StyleSheet.create({
    title1:{
        fontSize:33,
        alignSelf:'center',
        justifyContent:'center',
        color:'white',
        fontWeight:'600',
        paddingTop:15,
    },
    title2:{
        textAlign:'flex-start',
        paddingLeft:25,
        color:'black',
        fontSize:20,
        fontWeight:'600',
        paddingStart:32,
        paddingTop:25,
    },
    allagree:{
        color:'black',
        fontSize:17,
        fontWeight: '700',
    },
    agree:{
        color:'black',
        fontSize:17,
    },
    findtx:{
        fontSize:30,
        alignSelf:'center',
        justifyContent:'center',
        color:'white',
        fontWeight:'600',
        paddingTop:5,
    },
});

export const acheckstyles = StyleSheet.create({
    container: {
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginVertical:15,
        marginStart:-210
    },
    checkbox: {
        margin:8
    }
})
