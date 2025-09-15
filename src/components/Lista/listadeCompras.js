import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function ShoppingList({ items }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <View style={styles.item}>
              <Ionicons name="checkmark-circle" size={22} color="black" />
              <Text style={styles.text}>{item}</Text>
            </View>
            
            {index < items.length - 1 && <View style={styles.separator} />}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}