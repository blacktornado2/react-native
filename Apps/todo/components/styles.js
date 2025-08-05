import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  textInput: {
    height: 40,
    marginHorizontal: 15,
    borderWidth: 2,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginVertical: 20,
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
    marginHorizontal: "auto",
    marginBottom: 40,
    width: "50%",
    padding: 10,
    borderRadius: 3,
    backgroundColor: "#03a819ff",
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
  noTodo: {
    fontSize: 20,
    color: "#fc392bff",
    marginHorizontal: "auto",
  },
});



