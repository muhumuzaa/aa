import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task =(props) =>{
    return (
        <View style ={styles.item}>
            <View style ={styles.itemLeft}>
                <TouchableOpacity style ={styles.square}></TouchableOpacity>
                <Text style={styles.itemText}>{props.text}</Text>

            </View>
            <View style ={styles.circular}></View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    item:{
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        marginBottom: 10,
       
    },
    itemLeft:{
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
    },
    square: {
        backgroundColor: "#55BCF6",
        width: 24, 
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10

    },
    itemText:{
        maxWidth: "80%"
    },
    circular: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#55BCF6"
    }
})

export default Task;