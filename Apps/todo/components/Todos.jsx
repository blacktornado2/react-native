import { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";


import { styles } from "./styles";


// TODO: Add the functionality of changing the order of todo
// TODO: Add the functionality of editing any todo
// TODO: Add the functionality of adding animation when adding any todo


export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");


  useEffect(() => {
    const getTodos = async () => {
      const storedTodos = await AsyncStorage.getItem("todos");
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    };
    getTodos();
  }, []);


  const addTodo = async () => {
    if (todoInput) {
      setTodos([...todos, todoInput[0].toUpperCase() + todoInput.slice(1)]);
      setTodoInput("");
      await AsyncStorage.setItem(
        "todos",
        JSON.stringify([...todos, todoInput])
      );
      Toast.show({
        type: "success",
        text1: "Success!",
        text2: "Todo added!!",
        visibilityTime: 2000,
      });
    }
  };


  const removeTodo = async (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
    await AsyncStorage.setItem("todos", JSON.stringify(newTodos));
    Toast.show({
      type: "error",
      text1: "Removed!",
      text2: "Todo removed!!",
      visibilityTime: 2000,
    });
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={todoInput}
        onChangeText={setTodoInput}
        placeholder="Add a new todo"
      />
      <TouchableOpacity style={styles.inputBtn} onPress={addTodo}>
        <Text style={styles.btnText}>Add Todo</Text>
      </TouchableOpacity>
      {todos.length ? (
        todos.map((todo, index) => (
          <View style={styles.todolist} key={index}>
            <Text>
              {index + 1}. {todo}
            </Text>
            <View style={styles.btnGroup}>
              <TouchableOpacity
                style={styles.removeBtn}
                onPress={() => removeTodo(index)}
              >
                <Text style={styles.btnText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text style={styles.noTodo}>No tasks yet!</Text>
      )}
    </View>
  );
}



