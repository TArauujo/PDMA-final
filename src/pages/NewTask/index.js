import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Alert, Button } from "react-native"

import database from "../../config/firebaseconfig.js"
import styles from "./style"

export default function NewTask({ navigation }){
    const [description, setDescription] = useState(null)
    const [ano, setAno] = useState(null)
    const [genero, setGenero] = useState(null)
    const [historia, setHistoria] = useState(null)
    
    function addTask(){
        database.collection("trabFinal").add({
            description: description,
            status: false,
            ano:ano,
            genero:genero,
            historia:historia,
        })
        navigation.navigate("Bandas Cadastradas")
    }
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Nome da Banda</Text>
            <TextInput
                style={styles.input}
                placeholder="Escreva o nome da banda!!"
                onChangeText={setDescription}
                value={description}
            />
            
            <Text style={styles.label}>Ano de Formação</Text>
            
            <TextInput
                style={styles.input}
                placeholder="Escreva o ano de formação da banda!!"
                onChangeText={setAno}
                value={ano}
            />

            <Text style={styles.label}>Gênero da Banda</Text>

            <TextInput
                style={styles.input}
                placeholder="Escreva o gênero músical da banda!!"
                onChangeText={setGenero}
                value={genero}
                
            />

            <Text style={styles.label}>História da Banda</Text>

            <TextInput
                style={styles.input}
                placeholder="Escreva a história!!"
                onChangeText={setHistoria}
                value={historia}
                
            />
            <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={()=>{
                    addTask()
                }}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
                
    )
}