import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

// TODO: Add the functionality of changing the order of todo
// TODO: Add the functionality of editing any todo
// TODO: Add the functionality of adding animation when adding any todo
export default function App() {
  const [todos, setTodos] = useState(["Study", "Buy groceries"]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (todoInput) {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={todoInput}
        onChangeText={setTodoInput}
      />
      <TouchableOpacity style={styles.inputBtn} onPress={addTodo}>
        <Text style={styles.btnText}>Add Todo</Text>
      </TouchableOpacity>
      {todos.length ? (
        todos.map((todo, index) => (
          <View style={styles.todolist} key={todo}>
            <Text>{todo}</Text>
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
        <Text>No Todos</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 10,
  },
  todolist: {
    marginTop: 10,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBtn: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#02abe3",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
  },
  removeBtn: {
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 3,
    backgroundColor: "#f0052c",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 900,
  },
  btnText: {
    color: "white",
  },
  btnGroup: {
    display: "flex",
    flexDirection: "row",
  },
});
