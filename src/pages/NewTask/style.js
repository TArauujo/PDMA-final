import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "black",
        //backgroundColor:'#fff'
    },
    label:{
        textAlign:"center",
        width:"95%",
        marginTop: 20,
        fontSize:18,
        marginLeft: 20,
        color:"red"
    },
    input:{
        textAlign:"center",
        width:"98%",
        margin: 5,
        marginTop:10,
        padding:10,
        paddingVertical: 10, 
        paddingHorizontal: 25,
        borderWidth: 2,
        height:50,
        //borderBottomWidth: 1,
        //borderBottomColor: "yellow",
        borderRadius: 15,
        borderStyle:'solid',
        marginLeft:"auto",
        marginRight:"auto",
        backgroundColor:"white",
        textUunderlinePosition: 1,
        wordSpacing: 8
        
    },
    buttonNewTask:{
        width:60,
        height:60,
        position:"absolute",
        bottom:30,
        left:20,
        backgroundColor:"#F92e6a",
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },
    iconButton:{
        color:"#ffffff",
        fontSize:16,
        fontWeight:"bold",
    }
});

export default styles