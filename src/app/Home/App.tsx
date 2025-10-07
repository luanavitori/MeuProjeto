import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

interface Item {
  id: string;
  nome: string;
  produtor: string;
  valor: number;
  quantidade: number;
}

export default function App() {
  const [nome, setNome] = useState("");
  const [produtor, setProdutor] = useState("");
  const [valor, setValor] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [itens, setItens] = useState<Item[]>([]);

  const taxaEntrega = 5;

  function adicionarItem() {
    if (!nome || !produtor || !valor || !quantidade) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    const precoNum = parseFloat(valor);
    const qtdNum = parseInt(quantidade);

    if (isNaN(precoNum) || isNaN(qtdNum) || precoNum <= 0 || qtdNum <= 0) {
      Alert.alert("Erro", "Valores inválidos!");
      return;
    }

    const novoItem: Item = {
      id: Date.now().toString(),
      nome,
      produtor,
      valor: precoNum,
      quantidade: qtdNum,
    };

    setItens([...itens, novoItem]);
    setNome("");
    setProdutor("");
    setValor("");
    setQuantidade("");
  }

  function aumentar(id: string) {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  }

  function diminuir(id: string) {
    setItens((prev) =>
      prev.map((item) =>
        item.id === id && item.quantidade > 1
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
    );
  }

  function removerItem(id: string) {
    setItens((prev) => prev.filter((item) => item.id !== id));
  }

  const totalPedido =
    itens.reduce((acc, item) => acc + item.valor * item.quantidade, 0) +
    taxaEntrega;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>

   
      <TextInput
        style={styles.input}
        placeholder="Nome do produto"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do produtor"
        placeholderTextColor="#999"
        value={produtor}
        onChangeText={setProdutor}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor (R$)"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        placeholderTextColor="#999"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
      />

      <TouchableOpacity style={styles.button} onPress={adicionarItem}>
        <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
      </TouchableOpacity>

     
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.infoContainer}>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.produtor}>{item.produtor}</Text>
            </View>

            <View style={styles.quantidadeContainer}>
              <TouchableOpacity onPress={() => diminuir(item.id)}>
                <MaterialIcons name="remove-circle" size={24} color="#9b59b6" />
              </TouchableOpacity>
              <Text style={styles.quantidade}>{item.quantidade}</Text>
              <TouchableOpacity onPress={() => aumentar(item.id)}>
                <MaterialIcons name="add-circle" size={24} color="#2ecc71" />
              </TouchableOpacity>
            </View>

            <View style={styles.precoContainer}>
              <Text style={styles.preco}>
                R${(item.valor * item.quantidade).toFixed(2)}
              </Text>
              <TouchableOpacity onPress={() => removerItem(item.id)}>
                <MaterialIcons name="delete" size={22} color="#e74c3c" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

     
      <View style={styles.resumo}>
        <View style={styles.linhaResumo}>
          <Text style={styles.textoResumo}>Taxa de entrega (45 - 60 min)</Text>
          <Text style={styles.textoResumo}>R${taxaEntrega.toFixed(2)}</Text>
        </View>
        <View style={styles.linhaResumo}>
          <Text style={styles.totalLabel}>Total do pedido</Text>
          <Text style={styles.totalValor}>R${totalPedido.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
}






























