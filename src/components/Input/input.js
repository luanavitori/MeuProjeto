import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function InputProduct({ onAdd }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o Produto"
        placeholderTextColor="#ccc"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (text.trim()) {
            onAdd(text);
            setText("");
          }
        }}
      >
        <Ionicons name="add" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}