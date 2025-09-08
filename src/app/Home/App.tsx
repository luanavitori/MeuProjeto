import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView} from 'react-native';
import { styles } from './styles';
import { Event } from "../../components/Event";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lista de Compras</Text>
      <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Digite o produto" placeholderTextColor={'#fff'} ></TextInput>
      <TouchableOpacity style={styles.button} onPress={()=>{Alert.alert("Teste Botão")}}>
        <Text style={styles.buttonText}><Ionicons name="add-circle-outline" size={24} color="black" /></Text>
      </TouchableOpacity>
      {/* <StatusBar style="auto" /> */}
      </View>
      <ScrollView>
      <Event name = "Maça"/>
      <Event name = "Banana"/>
      <Event name = "Melancia"/>
      </ScrollView>
      
    </View>
   
  );
}