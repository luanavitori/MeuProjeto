import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from "./styles";

export default function App() {
    const [ownerName, setOwnerName] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [width, setWidth] = useState('');
    const [length, setLength] = useState('');
    const [landSize, setLandSize] = useState('');

    function calculateLandSize(): void {
        const widthNum = parseFloat(width);
        const lengthNum = parseFloat(length);

        if (isNaN(widthNum) || isNaN(lengthNum)) {
            Alert.alert('Erro', 'Por favor, insira valores numéricos válidos para largura e comprimento.');
            return;
        }

        const size = widthNum * lengthNum;
        setLandSize(size.toFixed(2)); 
    }
return (
<View style={styles.container}>
      <Text style={styles.text}>Cadastro Imovel</Text>
      <View style={styles.Conteudo}>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input} 
                        placeholder='Nome do Proprietário' 
                        placeholderTextColor={'#black'} 
                        value={ownerName}
                        onChangeText={setOwnerName}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Tipo do Imóvel' 
                        placeholderTextColor={'#aaaa'} 
                        value={propertyType}
                        onChangeText={setPropertyType}
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Largura do Terreno (m)' 
                        placeholderTextColor={'#AAAA'} 
                        value={width}
                        onChangeText={setWidth}
                        keyboardType="numeric"
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder='Comprimento do Terreno (m)' 
                        placeholderTextColor={'#AAAA'} 
                        value={length}
                        onChangeText={setLength}
                        keyboardType="numeric"
                    />
                    <TouchableOpacity style={styles.button} onPress={calculateLandSize}>
                        <Text style={styles.buttonText}>CALCULAR TAMANHO</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Text style={styles.borda} >Proprietário: {ownerName}</Text>
                    <Text style={styles.borda}>Tipo do Imóvel: {propertyType}</Text>
                    <Text style={styles.borda}>Tamanho do Terreno: {landSize} m²</Text>
                </ScrollView>
            </View>
        </View>
    );
}































