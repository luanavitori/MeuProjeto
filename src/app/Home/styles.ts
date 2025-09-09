import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#1E90FF',
    paddingTop: 50,
    padding: 16,
    gap: 10,
  },

 
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },


  input: { 
    backgroundColor: "#104E8B",
    borderRadius: 20,
    height: 40,          
    width: "70%",        
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#1E90FF",
    color: "#fff",
  },

  
  form:{
    width:"100%",
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "flex-start", 
    marginTop: 20,
    gap: 10, 
  },

  
  button:{
    backgroundColor: "#32CD32",
    width: 50,      
    height: 40,     
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",
  },

  buttonText:{
    color: '#fff',
    fontSize:20,
  },

 
  listaContainer: {
    width: "100%",
    backgroundColor: "#4682B4",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#000",
    padding: 16,
    marginTop: 20,
  },

  
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },

 
  texto: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    color: "#fff",
  },
});









// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#1E90FF',
//       paddingTop: 50,
//       padding: 16,
//       gap: 10
//     },
//     text: { 
//       fontSize: 36,
//       color: "#fff"
//     },
//     input: { 
//       backgroundColor: "#104E8B",
//       borderRadius: 8,
//       height: 56,
//       marginTop: 30,
//       flex: 1
//     },
//     buttonText:{
//       color: '#fff',
//       fontSize:20,
    
//     },
//     button:{
//       backgroundColor: "#32CD32",
//       width: 56,
//       height: 56,
//       borderRadius: 8,
//       alignItems:"center",
//       justifyContent:"center",
//       marginTop:30,
//       marginRight: 5
// ,    },
//     form:{
//       width:"100%",
//       flexDirection:"row"

//     }
// });
