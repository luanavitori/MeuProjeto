import { View, Text, ScrollView, StyleSheet, TextInput } from "react-native";
import { useState} from "react"
import  styles  from "./styles";
import { Input } from "../../Components/Input";
import { Itens }  from "../../Components/Itens";


export default function App() {
  const [list, setList] = useState<string[]>([])
  const [listName, setListName] = useState('')


  function handleAdd() {
    setList(prevState => [...prevState, listName])
    setListName('')
    
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Compras</Text>
      <Input placeH='Digite o produto' 
      onChangeText={e => setListName(e)}
      onPress={handleAdd}
      value={listName} 
      />
      <View style={styles.area}>
        <ScrollView>
          {
            list.map(item=>(
              <Itens
              key={item}
              name={item}
              />
            
            ))
          }
        </ScrollView>
        </View>
      </View>
      );
}































