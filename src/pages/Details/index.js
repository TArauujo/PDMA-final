import { NavigationHelpersContext } from "@react-navigation/native";
import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native"

import database from "../../config/firebaseconfig.js";

import styles from "./style"

export default function Details({ navigation, route }){
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const [anoEdit, setAnoEdit] = useState(route.params.ano)
    const [generoEdit, setGeneroEdit] = useState(route.params.genero)
    const [historiaEdit, setHistoriaEdit] = useState(route.params.historia)
    const idTask = route.params.id
    
    function editTask(description, ano, genero, historia, id){
        database.collection("trabFinal").doc(id).update({
            description: descriptionEdit,
            ano:anoEdit,
            genero:generoEdit,
            historia:historiaEdit,
        })
        navigation.navigate("Bandas Cadastradas")
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.label}>Nome da Banda</Text>
            <TextInput
                style={styles.input}
                placeholder="Escreva o nome da Banda!!"
                onChangeText={setDescriptionEdit}
                value={descriptionEdit}
            />
            <Text style={styles.label}>Ano de Formação</Text>
            <TextInput
                style={styles.input}
                placeholder="Escreva o ano de formação da banda!!"
                onChangeText={setAnoEdit}
                value={anoEdit}
            />
            <Text style={styles.label}>Gênero da Banda</Text>
            <TextInput
                style={styles.input}
                placeholder="Escreva o gênero músical da banda!!"
                onChangeText={setGeneroEdit}
                value={generoEdit}
            />
            <Text style={styles.label}>História da Banda</Text>
            <TextInput
                style={styles.input}
                placeholder="Escreva a história da banda!!"
                onChangeText={setHistoriaEdit}
                value={historiaEdit}
            />
            <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={()=>{
                    editTask(descriptionEdit, anoEdit , generoEdit, historiaEdit,idTask)
                }}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}