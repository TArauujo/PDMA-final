import React, { useState, useEffect } from "react";
import {View, Text, TouchableOpacity, FlatList, ScrollView} from "react-native"
 import database from "../../config/firebaseconfig.js";
 import { FontAwesome } from "@expo/vector-icons"
 import styles from "./style.js"

export default function Task({ navigation }){
    const [task, setTask] = useState([])

    function deleteTask(id){
        database.collection("trabFinal").doc(id).delete()
    }

    useEffect(()=>{
        database.collection("trabFinal").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({...doc.data(), id: doc.id })
            })
            setTask(list)
        })
    }, [])

    return(

        <View style={ styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={( {item} ) => {
                    return(
                    <View style={styles.Tasks}>
                        {/* <Text>asd</Text> */}
                        <TouchableOpacity
                            style={styles.deleteTasks}
                            onPress={() => {
                                deleteTask(item.id)
                                alert("Banda excluída!!")
                            }}
                        >
                        <FontAwesome 
                            name="remove"
                            size={15}
                            color="red"
                        >
                        </FontAwesome>
                        </TouchableOpacity>
                        <Text
                            style={styles.DescriptionTask}
                            onPress={() =>{
                                navigation.navigate("Detalhes Banda",{
                                    id: item.id,
                                    description: item.description,
                                    ano:item.ano,
                                    genero:item.genero,
                                    historia:item.historia,
                                })
                            }}
                        >
                        {item.description}
                        </Text>
                        
                    </View>
                    )
                }}
            />

            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("Nova Banda")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
                
        </View>
    )
}