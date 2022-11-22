import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        // backgroundColor: "#fff",
        paddingTop: 20
    },

    Tasks:{
        width:"100%",
        flexDirection:"row-reverse",
        // flexDirection:"row",
        justifyContent:"center",
        //justifyContent:"space-between",
        marginTop:5,
        textAlign:"center"
    },

    deleteTask:{
        justifyContent:"center",
        paddingLeft:15,

    },

    DescriptionTask:{
        width:"75%",
        alignContent:"flex-start",
        backgroundColor:"white",
        // backgroundColor:"#f5f5f5cf",
        padding:15,
        paddingHorizontal:20,
        borderRadius:50,
        marginBottom:5,
        marginRight:15,
        color:"black",
        textAlign:"center",
        fontSize: 18
    },

    buttonNewTask:{
        width:65,
        height:65,
        position:"absolute",
        bottom:30,
        left:20,
        backgroundColor:"#483D8B",//DarkSlateBlue
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center"
    },

    iconButton: {
        color:"white",
        fontSize:30,
        fontWeight:"bold",
    }
});

export default styles 