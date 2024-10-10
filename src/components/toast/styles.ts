import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor:'#333',
        zIndex:100,
        padding:10,
        alignSelf:'center',
        width:'80%',
        marginBottom:5
    },
    toast: {
        color:'#fff',
        textAlign:'center'
    },
    toastContainer: {
        position:'absolute',
        left:0,
        right:0,
        justifyContent:'flex-end',
        zIndex:1000,
        bottom:30,
        alignItems:'center'
    }
})