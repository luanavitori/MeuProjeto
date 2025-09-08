import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    name: string,
    onClick?: ()=>void
}

export function Event({name}: Props) {
    return(
        <View style = {styles.container}>
            <AntDesign style = {styles.icon} name="checkcircle" size={24} color="green" marginleft="10" />
            <Text style = {styles.text}>{name}</Text>
            <TouchableOpacity >
           
            </TouchableOpacity>
        </View>
    )
    
}