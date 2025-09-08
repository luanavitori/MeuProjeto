import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1E90FF',
      paddingTop: 50,
      padding: 16,
      gap: 10
    },
    text: { 
      fontSize: 36,
      color: "#fff"
    },
    input: { 
      backgroundColor: "#104E8B",
      borderRadius: 8,
      height: 56,
      marginTop: 30,
      flex: 1
    },
    buttonText:{
      color: '#fff',
      fontSize:20,
    
    },
    button:{
      backgroundColor: "#32CD32",
      width: 56,
      height: 56,
      borderRadius: 8,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      marginLeft: 5
,    },
    form:{
      width:"100%",
      flexDirection:"row"

    }
});
