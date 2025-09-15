import React, { useState } from "react";
import { View, Text } from "react-native";
import InputProduct from "../Components/Input/input.js";
import ShoppingList from "../Components/Lista/listadeCompras.js";
import styles from "./styles";

export default function App() {
  const [items, setItems] = useState<string[]>(["Maçã", "Banana", "Melancia"]);

  const addItem = (item: string) => {
    setItems((prev) => [...prev, item]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Compras</Text>
      <InputProduct onAdd={addItem} />
      <ShoppingList items={items} />
    </View>
  );
}


































// import React from "react";
// import { Text, View, FlatList, TextInput, TouchableOpacity } from "react-native";
// import { AntDesign, Ionicons } from "@expo/vector-icons";
// import { styles } from "./styles";

// interface Item {
//   id: string;
//   nome: string;
// }

// export default function App() {
  
//   const lista: Item[] = [
//     { id: "1", nome: "Maçã" },
//     { id: "2", nome: "Banana" },
//     { id: "3", nome: "Melancia" },
//     { id: "4", nome: "Limão" },
//     { id: "5", nome: "Pera" },
//   ];

//   const renderItem = ({ item, index }: { item: Item; index: number }) => (
//     <View
//       style={[
//         styles.item,
//         index === lista.length - 1 && { borderBottomWidth: 0 }, // tira borda do último
//       ]}
//     >
//       <AntDesign name="checkcircle" size={20} color="black" />
//       <Text style={styles.texto}>{item.nome}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.inputContainer}>
//       <TextInput
//         style={styles.input}
//         placeholder="Digite o produto"
//         placeholderTextColor="#fff"
//       />
//       <TouchableOpacity style={styles.button}>
//         <Ionicons name="add-circle-outline" size={24} color="black" />
//       </TouchableOpacity>

//       <FlatList
//         data={lista}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         style={styles.listaContainer}
//       />
//     </View>
//   );
// }
