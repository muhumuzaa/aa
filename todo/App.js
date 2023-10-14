import React, {useState} from "react";

import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from "react-native";
import Task from "./components/Task";

export default function App() {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask =()=>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null)
  }

  const completeTask = (index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View
      style={styles.container}>

      <View style ={styles.tasksWrapper}>
      <Text style ={styles.sectionTitle}>Today's Tasks</Text>

      
      <View style ={styles.items}>
      {
        taskItems.map((item, index) =>{
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
               <Task text={item}/>
            </TouchableOpacity>
          )
        })
      }
      </View>

      </View>

      <KeyboardAvoidingView behavior={Platform.OS ==="ios"? "padding": "height"} style={styles.writeTaskWrapper}>
      <TextInput placeholder={"Add a new task"} style={styles.input} value={task} onChangeText={text=>setTask(text)} />

      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.addWrapper}>
          <Text style ={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d3d3d3"
  },

  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: "bold"
  },
  items:{
    marginTop: 40,
  },
  writeTaskWrapper:{  
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 60,
    alignItems: "center",
  },

  input:{
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderColor: "grey",
    borderWidth: 1,
    backgroundColor: "white",
    width: "50%",
    borderRadius: 20,
  


  },

  addWrapper:{
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center"
  },

  addText:{
    fontSize: 24,
    textAlign: "center",
    color: "grey",
   

  }


})