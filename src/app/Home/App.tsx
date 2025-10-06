import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';

export default function App() {
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState('');
  const [list, setList] = useState([]);

  const totalCalories = list.reduce((sum, item) => sum + Number(item.calories), 0);

  const addItem = () => {
    if (!food || !calories) return;
    const newItem = { id: Date.now().toString(), food, calories };
    setList([...list, newItem]);
    setFood('');
    setCalories('');
  };

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const clearAll = () => setList([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calorias</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o alimento"
          value={food}
          onChangeText={setFood}
        />
        <TextInput
          style={styles.input} placeholder="Digite as calorias"
          keyboardType="numeric"
          value={calories}
          onChangeText={setCalories}
        />

        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Conteudo}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Item</Text>
          <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Calorias</Text>
          <TouchableOpacity onPress={clearAll}>
            <Text style={{ color: '#FFF' }}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#FFF',
                borderRadius: 5,
                padding: 10,
                marginBottom: 10,
              }}
            >
              <Text style={{ fontWeight: 'bold' }}>{item.food}</Text>
              <Text style={{ color: '#007BFF', fontWeight: 'bold' }}>{item.calories} kcal</Text>
              <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <Text style={{ color: 'red', fontSize: 18 }}>🗑️</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View style={styles.borda}>
        <Text style={styles.buttonText}>{totalCalories} kcal</Text>
      </View>
    </View>
  );
}































